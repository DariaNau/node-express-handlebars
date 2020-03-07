let express = require("express");
let router = express.Router();

// Import the model to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(function (data) {
    let all = {
      burgers: data
    };
    console.log(all);
    res.render("index", all);
    console.log(req.body)
  });
});

router.post("/api/burgers", (req, res) => {
  console.log(req.body)
  burger.create("burger_name", [req.body.burger], function (result) {
    res.redirect('/');
  })
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = req.params.id;
  console.log("condition", condition);
  burger.update({
    //we can pass true statement here to update the urger which current devoured state is false
      devoured: true
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


module.exports = router;