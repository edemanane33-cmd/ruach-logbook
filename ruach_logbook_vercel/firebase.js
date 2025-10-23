// Firebase configuration for Ruach Filled Ministries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFfoQVO9_Fu7ntdX-nExpvA16WauM41Rs",
  authDomain: "ruach-filled-ministries-f74b9.firebaseapp.com",
  databaseURL: "https://ruach-filled-ministries-f74b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ruach-filled-ministries-f74b9",
  storageBucket: "ruach-filled-ministries-f74b9.appspot.com",
  messagingSenderId: "327479975273",
  appId: "1:327479975273:web:c202e6eda9f2a285a731f8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
