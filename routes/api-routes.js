var db = require("../models");
var passport = require("passport");
var LocationInfo = require ("../models/locInfo.js")



module.exports = function(app) {

  app.get("/api/zipcodes", function(req, res) {
    db.LocationInfo.findAll({}).then(function(resul) {
      res.json(resul);
    });
  });

  
  app.get("/api/services/:make", function(req, res) {
    console.log("I am good" + req.params.make);
    var userMake = req.params.make;
    db.car_service
      .findAll({
        where: {
          car_make: userMake
        }
      })
      .then(function(result) {
        console.log("I am result" + result);
        res.json(result);
      });
  });

  app.post("/api/userAppointmentInfo", function (req, res) {
    console.log(req.body);
    db.userAppointmentInfo.create({
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
      trim: req.body.trim,
      date: req.body.date,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber,
      serviceCost: req.body.serviceCost
    }).then(function (dbUserAppointmentInfo) {
      res.json(dbUserAppointmentInfo);
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
