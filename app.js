let userData = {};
let usedStorage = 0;

function showRegister() {
  hideAll();
  document.getElementById("register-section").classList.remove("hidden");
}

function showReset() {
  hideAll();
  document.getElementById("reset-section").classList.remove("hidden");
}

function showPasswordChange() {
  hideAll();
  document.getElementById("password-change-section").classList.remove("hidden");
}

function login() {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-password").value;
  if (email === userData.email && pass === userData.password) {
    hideAll();
    document.getElementById("drive-section").classList.remove("hidden");
    document.getElementById("used-gb").textContent = usedStorage;
  } else {
    alert("Nepareizi dati!");
  }
}

function register() {
  userData = {
    name: document.getElementById("reg-name").value,
    email: document.getElementById("reg-email").value,
    password: document.getElementById("reg-password").value,
    dob: `${document.getElementById("reg-day").value}-${document.getElementById("reg-month").value}-${document.getElementById("reg-year").value}`,
    gender: document.getElementById("reg-gender").value,
  };
  alert("Konts izveidots!");
  hideAll();
  document.getElementById("auth-section").classList.remove("hidden");
}

function resetPassword() {
  const email = document.getElementById("reset-email").value;
  const code = document.getElementById("reset-code").value;
  if (email === "datasecure@gmail.com" && code === "123456") {
    const newP1 = document.getElementById("new-password").value;
    const newP2 = document.getElementById("new-password-repeat").value;
    if (newP1 === newP2) {
      userData.password = newP1;
      alert("Parole nomainīta!");
      showLogin();
    } else alert("Paroles nesakrīt!");
  } else alert("Nepareiza verifikācija!");
}

function changePassword() {
  const newP1 = document.getElementById("newPass1").value;
  const newP2 = document.getElementById("newPass2").value;
  if (newP1 === newP2) {
    userData.password = newP1;
    alert("Parole mainīta.");
    showLogin();
  } else alert("Paroles nesakrīt!");
}

function logout() {
  hideAll();
  document.getElementById("auth-section").classList.remove("hidden");
}

function showLogin() {
  hideAll();
  document.getElementById("auth-section").classList.remove("hidden");
}

function hideAll() {
  document.querySelectorAll(".container").forEach(e => e.classList.add("hidden"));
}

function uploadFile() {
  const input = document.getElementById("fileInput");
  if (input.files.length > 0) {
    const li = document.createElement("li");
    li.textContent = input.files[0].name + ' ';
    const btn = document.createElement("button");
    btn.textContent = "Lejupielādēt";
    btn.onclick = () => alert("Fails tiktu ielādēts.");
    li.appendChild(btn);
    document.getElementById("fileList").appendChild(li);
    usedStorage += 1;
    document.getElementById("used-gb").textContent = usedStorage;
  }
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Pievieno db.js, kas izveidos savienojumu ar MongoDB
require('./db');  // Pārliecinies, ka ceļš uz db.js ir pareizs

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Tālāk jau vari veidot modeļus, maršrutus un citas funkcijas...
const mongoose = require('mongoose');

// MongoDB savienojuma URI (Atlas savienojums)
const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/google-drive-clone?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Savienojums ar MongoDB Atlas ir veiksmīgs');
}).catch((err) => {
    console.log('Kļūda savienojot ar MongoDB:', err);
});

module.exports = mongoose;