var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page

  // app.get("/", function (req, res) {
  //   res.render("index", {
  //     loginFailed: false
  //   });
  // });

  // app.get("/example", function (req, res) {
  //   res.render("example", {
  //     loginFailed: false
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

  app.get("/example", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/example.html"));
  });

  // blog route loads blog.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
};
