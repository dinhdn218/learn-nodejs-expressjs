const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

// Set up handlebars
app.engine(
  "hbs",
  expressHandlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/news", (req, res) => {
  return res.render("news");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} at http://localhost:${port}`);
});
