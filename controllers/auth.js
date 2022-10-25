const firebase = require("../database");
const {createUserWithEmailAndPassword} = require("firebase-auth");


// register
register = (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required"
        });
    }
    firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((data) => {
        return res.status(201).json(data);
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if(errorCode == "auth/weak-password") {
            return res.status(500).json({error: errorMessage});
        } else {
            return res.status(500).json({error: errorMessage})
        }
    });
};

module.exports = register;