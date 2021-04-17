//TODO - Use all 7 RESTful routes
/* 
  Restful Routes
    Index - GET - /fruits -> Presentational
    New - GET - /fruits/new -> Presentational Form
    Create - POST - /fruits -> Functional
    Show - GET - /fruits/id -> Presentational
    Edit - GET - /fruits/id/edit -> Presentational Form
    Update - PUT/PATCH - /fruits/id -> Functional
    Delete - DELETE - /fruits/id -> Functional
*/
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

// Internal Modules
const db = require("./models")

// Instanced Modules
const app = express();

// Configuration Variables
const PORT = 4000

// App Configuration
app.set("view engine", "ejs")
// Middleware

// Controllers

// Homepage

app.get("/", function (req, res) {
  console.log("I'm the homepage");
  res.render("home")
})

// Server Bind
app.listen(PORT, () => {console.log("Server up and running!")})




