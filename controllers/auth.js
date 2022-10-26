const {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");

const firebaseApp = require("../database.js");

exports.signup = async (req, res) => {
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
};

exports.signin = async (req, res) => {
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
};
