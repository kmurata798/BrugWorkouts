const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')
const mongoose = require('mongoose');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

// Check if user is signedin
let checkAuth = (req, res, next) => {
  if (typeof req.cookies.api_token === "undefined" || req.cookies.api_token === null) {
      req.user = null
  } else {
      let token = req.cookies.api_token
      let decodedToken = jwt.decode(token, { complete: true }) || {}
      req.user = decodedToken.payload
  }
  next()
}

const app = express();
// bodyParser transforms data to allow our project to use the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(checkAuth);
// require DB
require("./seed/db")

const userRouter = require("./routes/user.js")
const indexRouter = require("./routes/index.js")

app.use('/users', userRouter)
app.use('/', indexRouter)
// view engine setup
// Added runtimeOptions to resolve "own property" error with hbs
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs', runtimeOptions: {
  allowProtoPropertiesByDefault: true,
  allowProtoMethodsByDefault: true
  }
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
// app.use(validator());
app.use(session({secret: 'mysecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
})


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// START SERVER
app.listen(8000, () => {
  console.log('Brug Workouts listening on port http://localhost:8000');
});

module.exports = app;
