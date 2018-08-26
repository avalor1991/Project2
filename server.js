require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var passport = require("passport");
var expressSession = require("express-session");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var db = require("./models");

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
var models = require("./models");
require("./config/passport/passport.js")(passport, models.User);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

db.sequelize
  .query("SET FOREIGN_KEY_CHECKS = 0")
  .then(function() {
    return db.sequelize.sync({ force: false });
  })
  .then(function() {
    db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

module.exports = app;
