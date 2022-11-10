const {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");

const { firebaseApp } = require("../database.js");

exports.signup = async (req, res) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      const user = userCredential.user;
      return res.status(200).json(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/email-already-in-use") {
        return res.status(409).send("user with email already exists");
      }
      if (errorCode == "auth/weak-password") {
        return res.status(400).send("the password is too weak");
      }
      return res.status(401).json({
        errorCode,
        errorMessage,
      });
    });
};

exports.signin = async (req, res) => {
  const auth = getAuth(firebaseApp);
  await signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(() => {
      return res.status(200).send("user signed in successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/wrong-password") {
        return res.status(403).send("wrong password");
      }
      if (errorCode == "auth/user-not-found") {
        return res
          .status(403)
          .send(`user with email ${req.body.email} does not exist`);
      }
      return res.status(401).json({
        errorCode,
        errorMessage,
      });
    });
};
