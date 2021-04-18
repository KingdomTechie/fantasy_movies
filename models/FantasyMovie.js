const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 1},
        director: {type: String, required: false,},
        imgURL: {type: String, required: false}
    },
);

const FantasyMovie = mongoose.model("FantasyMovie", movieSchema)

module.exports = FantasyMovie;