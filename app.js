<<<<<<< HEAD
require("dotenv").config();
=======
require('dotenv').config();
>>>>>>> feat/list-brands

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
<<<<<<< HEAD
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const mongoose = require("mongoose");


require('./configs/db.config');
require('./configs/passport.config');

const homeRouter = require('./routes/home.routes'); // add routes


=======
const mongoose = require('mongoose');
const passport = require('passport');

>>>>>>> feat/list-brands
const app = express();

// view engine setup
require('dotenv').config();



const brandRoutes = require('./routes/brand.routes');
// const cardsRoutes = require('./routes/cards.routes');
// const authRoutes = require('./routes/auth.routes');

require('./configs/db.config');
const session = require('./configs/session.config');
// const cors = require('./configs/cors.config');
// require('./configs/passport.config');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'SuperSecret - (Change it)',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.session = req.user;
  next();
})

app.use('/', homeRouter); // add routes


// weatherUtils.getWeatherData();
=======
// app.use(cors);

app.use(session);
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/brand', brandRoutes);
// app.use('/cards', cardsRoutes);
// app.use('/', authRoutes);
>>>>>>> feat/list-brands

app.use((req, res, next) => {
  res.locals.session = req.user;
  next();
})

// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (error, req, res, next) {
  console.error(error);

  res.status(error.status || 500);

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }
    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  }

  data.message = error.message;
  res.json(data);
});

module.exports = app;