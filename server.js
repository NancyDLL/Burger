// Require the following npm packages inside of the server.js file:
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//Set up Express server
var app = express();

//Set up Port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("public"));

//Set up the Router
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//Set up the Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});