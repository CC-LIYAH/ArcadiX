import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

function detectGameId() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameParam = urlParams.get('game');
  return gameParam ? gameParam.trim().toLowerCase() : null;
}

const AFK_TIMEOUT = 60000;
let isAfk = false;
let lastActivityTime = Date.now();

function resetAfkTimer() {
  const now = Date.now();
  
  if (isAfk) {
    isAfk = false;
    sessionStartTime = now;
  }
  
  lastActivityTime = now;
}

['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event => {
  window.addEventListener(event, resetAfkTimer, { passive: true });
});

setInterval(() => {
  if (!isAfk && (Date.now() - lastActivityTime >= AFK_TIMEOUT)) {
    savePlaytime(); 
    isAfk = true;
  }
}, 5000);

let sessionStartTime = Date.now();

async function savePlaytime() {
  const currentGameId = detectGameId();
  
  if (!currentGameId || isAfk) return;

  const user = auth.currentUser;
  if (!user) return;

  const now = Date.now();
  const secondsPlayed = Math.floor((now - sessionStartTime) / 1000);


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


setInterval(savePlaytime, 60000);

window.addEventListener("beforeunload", savePlaytime);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    savePlaytime();
    isAfk = true;
  } else {
    resetAfkTimer();
  }
});
