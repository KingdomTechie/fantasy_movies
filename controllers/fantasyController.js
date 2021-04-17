//TODO - Use all 7 RESTful routes
/* 
  Restful Routes
    Index - GET - /fantasyMovies -> Presentational √
    New - GET - /fantasyMovies/new -> Presentational Form 
    Create - POST - /fantasyMovies -> Functional
    Show - GET - /fantasyMovies/id -> Presentational
    Edit - GET - /fantasyMovies/id/edit -> Presentational Form
    Update - PUT/PATCH - /fantasyMovies/id -> Functional
    Delete - DELETE - /fantasyMovies/id -> Functional
*/

const express = require("express");
const router = express.Router();
const db = require("../models")

// Index - GET - /fantasyMovies -> Presentational
router.get("/", function (req, res) {
    res.render("fantasyMovieViews/index")
})

// New - GET - /fantasyMovies/new -> Presentational Form 
router.get("/new", function (req, res) {
    res.render("fantasyMovieViews/new.ejs")
})



module.exports = router;