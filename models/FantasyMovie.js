const mongoose = require("mongoose");

const fantasyMovieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 1},
        director: {type: String, required: false, minLength: 1},
        imgURL: {type: String, required: true,}
    },
    {timestamps: true}
)

const FantasyMovie = mongoose.model("FantasyMovie", fantasyMovieSchema)

module.exports = FantasyMovie;