const firebase = require('firebase-admin');
const firsebase_auth = require("firebase-auth");

const firebaseConfig = {
    apiKey: "AIzaSyDBsomEZoFgPVAjcn5UkPhwmb4KIQjZCd0",
    authDomain: "bookshop-bfab0.firebaseapp.com",
    projectId: "bookshop-bfab0",
    storageBucket: "bookshop-bfab0.appspot.com",
    messagingSenderId: "416605280355",
    appId: "1:416605280355:web:d469ab609a8ecd4b168056",
    measurementId: "G-35ZSV6VWXZ"
  };

  firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore()
  const Users = db.collection('Users')
  module.exports = firebase;