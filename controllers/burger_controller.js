let express = require("express");
let router = express.Router();

// Import the model to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    let all = {
      burgers: data
    };
    console.log(all);
    res.render("index", all);
  });
});

router.post("/", (req, res) => {
  burger.insertOne("burger_name", req.body.name, function(result) {
    console.log(req.body)
    // Send back the ID of the new burger
    res.json(result);
  });
});

module.exports = router

// { id: result.insertId }