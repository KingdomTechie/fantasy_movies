const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs")

/* 
  Restful Routes for User Authentication

    GET - /register Presentational Form
    POST - /register functional route
    GET - /login Presentational Form
    POST - /login functional

*/

router.get("/register", function (req, res) {
    res.render("userViews/register")
});

router.post("/register", async function (req, res) {
    try {
    // check if user exists, if so, redirect to login
    const foundUser = await db.User.findOne({email: req.body.email});

    // if so redirect to login
    if (foundUser) {
        return res.redirect("/login")
    }
    // if not create user and redirect to login

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash

    const newUser = await db.User.create(req.body);

    return res.redirect("/login")

} catch(err) {
    console.log(err);
    return res.send(err)
}
    
});

router.get("/login", function (req, res) {

});

router.post("/login", async function (req, res) {
    // check if user exits
    // if the user exits
        // validate the user if password match -> login
        // if not match send error
    // if not
        // redirect to register
    
   try {
    const foundUser = await db.User.findOne({email: req.body.email})

    if(!foundUser) return res.redirect("/register");
    // .compare (body password, hashed password) => return true or false
    const match = await bcrypt.compare(req.body.password, foundUser.password)

    // error handling
    if(!match) return res.send("password invalid")

    // if match create teh session and redirect to home
    req.session.currentUser = {
        id: foundUser._id,
        username: foundUser.username,
    }

    return res.redirect("/")

   } catch (err) {
        console.log(err);
        res.send(err);
   }

});

module.exports = router;