var db = require("../models");
var passport = require("passport");
var LocationInfo = require ("../models/locInfo.js")



module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.get("/api/zipcodes", function(req, res) {
  
    db.LocationInfo.findAll({}).then(function(resul) {
      res.json(resul);
    });
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/example",

      failureRedirect: "/"
    })
  );

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/example",
      failureRedirect: "/"
    })
  );
};
