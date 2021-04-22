
//TODO - Have full CRUD functionality
/* 
  CRUD Functionality
  C-reate
  R-ead
  U-pdate
  D-estroy
*/
//TODO - The app should have one model with at least two properties.

// External Modules
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Internal Modules
const db = require("./models")
const controllers = require("./controllers")

// Instanced Modules
const app = express();

// Configuration Variables
const PORT = 4000

// App Configuration
app.set("view engine", "ejs")

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Session middleware takes in a config object
app.use(session({
  // where to store the session in mongodb
  store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/fantasy_movie_db"}),
  // secret key is used to sign every cookie to say it is valid
  secret: "Super Secret Secret",
  resave: false,
  saveUninitialized: false,
  // configure the expiration of the cookie
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // milliseconds, seconds, minutes, hours, days, weeks - two weeks
  }
}));

// Logger Middleware (helper tool) - make sure to pass in req object, resp object, and next

app.use(function (req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  console.log(req.session);
  // we use next in route to tell express to move onto the next route in order
  next();
})

// Controllers
app.use("/fantasyMovies", controllers.fantasyRoute)

// Homepage
app.get("/", function (req, res) {
  req.session.example = "Some cool data"
  // console.log(req.session);
  res.render("home")
});

// Server Bind
app.listen(PORT, () => {console.log("Server up and running!")})




