const express = require("express");
const eventController = require("./controllers/event_controller");
const guestController = require("./controllers/guest_controller");
const requestController = require("./controllers/request_controller");

const PORT = process.env.PORT || 8080;
const db = require("./models");

// Set Handlebars.
const exphbs = require("express-handlebars");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(eventController);
app.use(guestController);
app.use(requestController);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force:true }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});