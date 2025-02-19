const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
const route = require("./routes");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Set up handlebars
app.engine(
  "hbs",
  expressHandlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Register a helper to check if the current route is active
const hbs = expressHandlebars.create({});
hbs.handlebars.registerHelper("isActive", function (currentRoute, linkRoute) {
  return currentRoute === linkRoute ? "active" : "";
});

// Route init
route(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port} at http://localhost:${port}`);
});
