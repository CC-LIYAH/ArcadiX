import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. Initialize Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIvUkO_paPfmMlbo5jNaXoteZL0fkZYa4",
  authDomain: "arcadix-7fc11.firebaseapp.com",
  projectId: "arcadix-7fc11",
  storageBucket: "arcadix-7fc11.appspot.com",
  messagingSenderId: "1024578621730",
  appId: "1:1024578621730:web:27adc1e3b5cdb802f1557b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 2. Playtime Tracking Logic
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
    await updateDoc(userRef, {
      playtime: increment(secondsPlayed)
    });
  } catch (err) {
    console.error("Failed to save playtime:", err);
  }
}

// Auto-save playtime every 60 seconds
setInterval(savePlaytime, 60000);

// Save playtime when user closes the tab or navigates away
window.addEventListener("beforeunload", savePlaytime);

// Pause time accumulation when switching tabs
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    savePlaytime();
  } else {
    sessionStartTime = Date.now();
  }
});
