require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var expressSession = require("express-session");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
require("./config/passport/passport.js")(passport, db.User);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
db.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
// Starting the server, syncing our models ------------------------------------/
db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0").then(function() {
  return db.sequelize.sync({ force: false });
}).then(function() {
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
