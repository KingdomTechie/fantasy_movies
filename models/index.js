const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/fantasy_movie_db";

mongoose.connect(mongoURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

mongoose.connection.on("connected", function () {
	console.log("MongoDB connected! :)");
});

mongoose.connection.on("disconnected", function () {
	console.log("MongoDB disconnected! :(");
});

mongoose.connection.on("err", function () {
	console.log("MongoDB error! Oh no!", err);
});

module.exports = {
    fantasyMov = require("./FantasyMovie");
}