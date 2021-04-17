//TODO - Use all 7 RESTful routes
/* 
  Restful Routes
    Index - GET - /fantasyMovies -> Presentational √
    New - GET - /fantasyMovies/new -> Presentational Form √
    Create - POST - /fantasyMovies -> Functional √
    Show - GET - /fantasyMovies/id -> Presentational
    Edit - GET - /fantasyMovies/id/edit -> Presentational Form
    Update - PUT/PATCH - /fantasyMovies/id -> Functional
    Delete - DELETE - /fantasyMovies/id -> Functional
*/

const express = require("express");
const router = express.Router();
const db = require("../models");

// Index - GET - /fantasyMovies -> Presentational
router.get("/", function (req, res) {
    db.fantasyMovie.find({}, function (err, allMovies) {
        if (err) {
            console.log(err);
            return res.send("Server error!");
        } else {
            const context = {allmovies: allMovies};
            return res.render("fantasyMovieViews/index", context)
        }
    });
});

// New - GET - /fantasyMovies/new -> Presentational Form 
router.get("/new", function (req, res) {
    res.render("fantasyMovieViews/new.ejs")
})

// Create - POST - /fantasyMovies -> Functional
router.post("/", function (req, res) {
    console.log(db.fantasyMov);

    // FIXME - Getting a TypeError: Cannot read property of undefinded
    db.fantasyMovie.create(req.body, function (err, createdMovie) {
        if (err) {
            console.log(err);
            return res.send("Sever error :(");
        } else {
            console.log("created Movie", createdMovie);
            return res.redirect("/fantasyMovies")
        }
    });
});

// Show - GET - /fantasyMovies/id -> Presentational
router.get("/:id", function (req, res) {
    res.render("fantasyMovieViews/show")
})


module.exports = router;