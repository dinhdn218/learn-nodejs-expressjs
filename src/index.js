const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./config/db');
const methodOverride = require('method-override');

const route = require('./routes');

// connect db
db.connect();

// Use static file in folder public
app.use(express.static(path.join(__dirname, 'public')));
// Use static file in folder resources
app.use(express.static(path.join(__dirname, 'resources')));

// use middleware to parse req from form data to body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Morgan - HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

// Handlebars - Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
