//TODO - Use all 7 RESTful routes
/* 
  Restful Routes
    
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
    console.log("All your movies in one spot");
})



module.exports = router;