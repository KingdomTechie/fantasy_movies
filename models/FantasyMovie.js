const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 1},
        director: {type: String, required: false, minLength: 1},
    },
);

const FantasyMovie = mongoose.model("FantasyMovie", movieSchema)

module.exports = FantasyMovie;