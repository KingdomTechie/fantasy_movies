
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
const methodOverride = require("method-override")

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

// Controllers
app.use("/fantasyMovies", controllers.fantasyRoute)

// Homepage
app.get("/", function (req, res) {
  res.render("home")
});

// Server Bind
app.listen(PORT, () => {console.log("Server up and running!")})




