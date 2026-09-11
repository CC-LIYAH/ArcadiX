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

// 2. Strict Game ID Detection (URL must have ?game=)
function detectGameId() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameParam = urlParams.get('game');
  return gameParam ? gameParam.trim().toLowerCase() : null;
}

// 3. AFK & Activity Detection
const AFK_TIMEOUT = 60000; // 60 seconds of inactivity triggers AFK
let isAfk = false;
let lastActivityTime = Date.now();

function resetAfkTimer() {
  const now = Date.now();
  
  if (isAfk) {
    // User returned from AFK: start new active session tracking
    isAfk = false;
    sessionStartTime = now;
  }
  
  lastActivityTime = now;
}

// Listen for common user interactions to reset AFK timer
['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event => {
  window.addEventListener(event, resetAfkTimer, { passive: true });
});

// Periodic check to flip status to AFK when user goes idle
setInterval(() => {
  if (!isAfk && (Date.now() - lastActivityTime >= AFK_TIMEOUT)) {
    savePlaytime(); // Save accumulated active time before pausing session
    isAfk = true;
  }
}, 5000);

// 4. Playtime Tracking Logic
let sessionStartTime = Date.now();

async function savePlaytime() {
  const currentGameId = detectGameId();
  
  // Strict condition: only track if user is logged in, URL has ?game=, and user is active
  if (!currentGameId || isAfk) return;

  const user = auth.currentUser;
  if (!user) return;

  const now = Date.now();
  const secondsPlayed = Math.floor((now - sessionStartTime) / 1000);

  // Ignore sessions shorter than 5 seconds
  if (secondsPlayed < 5) return;

  sessionStartTime = now;

  try {
    const userRef = doc(db, "users", user.uid);

    const updates = {
      playtime: increment(secondsPlayed),
      [`playtime_${currentGameId}`]: increment(secondsPlayed)
    };

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
    isAfk = true; // Automatically mark AFK while hidden
  } else {
    resetAfkTimer();
  }
});
