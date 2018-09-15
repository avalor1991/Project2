var db = require("../models");
var path = require("path");

module.exports = function(app) {

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
