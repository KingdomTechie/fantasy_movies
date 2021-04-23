//TODO - Use all 7 RESTful routes
/* 
  Restful Routes
    Index - GET - /fantasyMovies -> Presentational √
    New - GET - /fantasyMovies/new -> Presentational Form √
    Create - POST - /fantasyMovies -> Functional √
    Show - GET - /fantasyMovies/id -> Presentational √
    Edit - GET - /fantasyMovies/id/edit -> Presentational Form √
    Update - PUT/PATCH - /fantasyMovies/id -> Functional
    Delete - DELETE - /fantasyMovies/id -> Functional √
*/

const express = require("express");
const router = express.Router();
const db = require("../models");


// Index - GET - /fantasyMovies -> Presentational

router.get("/", async function (req, res) {
/*
    const database = db.fantasyMovie;
    console.log(database);
    db.fantasyMovie.find({}, function (err, allMovies) {
        if (err) {
            console.log(err);
            return res.send("Server error!");
        } else {
            const context = {movies: allMovies};
            
            return res.render("fantasyMovieViews/index", context)
        }
    });
*/
    try {
        const allMovies = await db.fantasyMovie.find({})
        const context = {movies: allMovies}

        return res.render("fantasyMovieViews/index", context)

    } catch(err) {
        console.log(err);
        return res.send(err);
    }
});

// New - GET - /fantasyMovies/new -> Presentational Form 
router.get("/new", function (req, res) {
    res.render("fantasyMovieViews/new.ejs")
})

// Create - POST - /fantasyMovies -> Functional
router.post("/", async function (req, res) {
    /*
    db.fantasyMovie.create(req.body, function (err, createdMovie) {
        if (err) {
            console.log(err);
            return res.send("Sever error :(");
        } else {
            console.log("created Movie", createdMovie);
            return res.redirect(`/fantasyMovies/${createdMovie._id}`)
        }
        
    });
    */
    try {
        const reqBody = await db.fantasyMovie.create(req.body)
    
        return res.redirect(`/fantasyMovies/${reqBody._id}`)

    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});

// Show - GET - /fantasyMovies/id -> Presentational
router.get("/:id", async function (req, res) {

    /*
    const id = req.params.id;

    db.fantasyMovie.findById(id, function (err, foundMovie) {
        if(err) {
            console.log(err);
            return res.send("Server error");
        } else {
            
            const context = {oneMovie: foundMovie};

            return res.render("fantasyMovieViews/show", context)
        }
    });
    */

    try {
        const id = req.params.id;

        const foundMovie = await db.fantasyMovie.findById(id)
        const context = {oneMovie: foundMovie}

        return res.render("fantasyMovieViews/show", context)
    } catch(err) {
        console.log(err);
        return res.send(err)
    }
});

// Edit - GET - /fantasyMovies/id/edit -> Presentational Form
router.get("/:id/edit", function (req, res) {
    const id = req.params.id;

    db.fantasyMovie.findById(id, function (err, foundMovie) {
        if (err) {
            console.log(err);
            return res.send("Server error");
        } else {
            const context = {movie: foundMovie};

            return res.render("fantasyMovieViews/edit", context);
        }
    });
        
});

// Update - PUT/PATCH - /fantasyMovies/id -> Functional
router.put("/:id", function (req, res) {
    const id = req.params.id;
    db.fantasyMovie.findByIdAndUpdate(
        id,
        {
            $set: {
                name: req.body.name,
                director: req.body.director,
            }
        },
        {new: true},
        function (err, updatedMovie) {
            if (err) {
                console.log(err);
            } else {
                return res.redirect(`/fantasyMovies/${updatedMovie._id}`)
            }
        }
    )
    
})

// Delete - DELETE - /fantasyMovies/id -> Functional
router.delete("/:id", function (req, res) {
    const id = req.params.id;
    db.fantasyMovie.findByIdAndDelete(
        id,
        (err, deletedMovie) => {
            console.log(deletedMovie);
        }
    )
    res.redirect("/fantasyMovies")
})

module.exports = router;