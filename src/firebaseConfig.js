// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyADhdW2bIh3butUrSBcAqsumhVRPG9NTQo",
  authDomain: "login-f26f4.firebaseapp.com",
  projectId: "login-f26f4",
  storageBucket: "login-f26f4.appspot.com",
  messagingSenderId: "134843072321",
  appId: "1:134843072321:web:3ecda96dc403800de4abc0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
