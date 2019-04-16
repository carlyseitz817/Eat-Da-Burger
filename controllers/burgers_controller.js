var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
      devoured: true
    }, condition, function() {
      res.redirect('/');
    });
  });

// Export routes for server.js to use.
module.exports = router;
