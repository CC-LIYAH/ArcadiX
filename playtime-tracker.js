import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. Safe Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyBIvUkO_paPfmMlbo5jNaXoteZL0fkZYa4",
  authDomain: "arcadix-7fc11.firebaseapp.com",
  projectId: "arcadix-7fc11",
  storageBucket: "arcadix-7fc11.appspot.com",
  messagingSenderId: "1024578621730",
  appId: "1:1024578621730:web:27adc1e3b5cdb802f1557b"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// 2. Automatic Game ID Detection
function detectGameId() {
  // Check URL query parameters first (?game=astrorace-io, ?page=astrorace-io, or ?id=astrorace-io)
  const urlParams = new URLSearchParams(window.location.search);
  const paramId = urlParams.get('game') || urlParams.get('page') || urlParams.get('id');
  if (paramId) return paramId.toLowerCase();

  // Extract from path name (e.g., "/ArcadiX/games/astrorace-io.html" -> "astrorace-io")
  const path = window.location.pathname;
  const fileName = path.substring(path.lastIndexOf('/') + 1).replace('.html', '').toLowerCase();

  // Exclude main site pages
  const nonGamePages = ['index', 'leaderboards', 'messages', 'profile', 'settings', 'admin', 'updates', 'all-games', ''];
  if (!nonGamePages.includes(fileName)) {
    return fileName;
  }

  return null;
}

// 3. Playtime Tracking Logic
let sessionStartTime = Date.now();

async function savePlaytime() {
  const user = auth.currentUser;
  if (!user) return;

  const now = Date.now();
  const secondsPlayed = Math.floor((now - sessionStartTime) / 1000);

  // Ignore sessions shorter than 5 seconds
  if (secondsPlayed < 5) return;

  sessionStartTime = now;

  try {
    const userRef = doc(db, "users", user.uid);
    const currentGameId = detectGameId();

    const updates = {
      playtime: increment(secondsPlayed)
    };

    // Dynamically increment specific game field if detected
    if (currentGameId) {
      updates[`playtime_${currentGameId}`] = increment(secondsPlayed);
    }

    await updateDoc(userRef, updates);
  } catch (err) {
    console.error("Failed to save playtime:", err);
  }
}

// Auto-save playtime every 60 seconds
setInterval(savePlaytime, 60000);

// Save playtime when user closes tab or navigates away
window.addEventListener("beforeunload", savePlaytime);

// Pause time accumulation when switching tabs
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    savePlaytime();
  } else {
    sessionStartTime = Date.now();
  }
});
