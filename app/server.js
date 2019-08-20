// var express = require ('express');
// var app = express();
// // var bodyParser = require ('body-parser');
// // var path = require('path');

// var PORT = process.env.PORT || 8080;


// // app.use(bodyParser.urlencoded({ extended: true}));


// // app.use(bodyParser.json({ type: 'application/*+json' }))


// // app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))


// // app.use(bodyParser.text({ type: 'text/html' }))

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

// app.listen(PORT, function() {
//     console.log('App listening on PORT: ' + PORT);
// });

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
