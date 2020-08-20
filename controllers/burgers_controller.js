const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("api/burgers", (req, res) => {
  burger.insertOne(["burger_name"], [req.body.burgerName], () => {
    res.redirect("/");
  });
});

router.put("api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (data) {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
