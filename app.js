const express = require("express");
const app = express();
const { initializeApp } = require("firebase/app");
const {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDBsomEZoFgPVAjcn5UkPhwmb4KIQjZCd0",
  authDomain: "bookshop-bfab0.firebaseapp.com",
  projectId: "bookshop-bfab0",
  storageBucket: "bookshop-bfab0.appspot.com",
  messagingSenderId: "416605280355",
  appId: "1:416605280355:web:d469ab609a8ecd4b168056",
  measurementId: "G-35ZSV6VWXZ",
};

const firebaseApp = initializeApp(firebaseConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      const user = userCredential.user;
      return res.json(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return res.json({
        errorCode,
        errorMessage,
      });
    });
});

app.post("/signin", async (req, res) => {
  try {
    const userSignIn = await signInWithEmailAndPassword(
      getAuth(firebaseApp),
      req.body.email,
      req.body.password
    );
    return res.json(userSignIn);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("app is listening on port", PORT);
});
