//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Define port the server will be listening on.
app.set('port', (process.env.PORT || 3313));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start node server
app.listen(app.get('port'), function () {
    console.log('Node server is running on port ' + app.get('port'));
});