'use strict';

var express = require("express");
var hbs = require('express-handlebars');
var flash = require('express-flash');

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

var routes = require('./routes');

var DEFAULT_ENV = "development";

if(process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = DEFAULT_ENV;
}

var PORT = 5000;

var args = process.argv.slice(2);
if (args.length > 0) {
  PORT = args[0];
}

var app = express();

app.set('views', `${__dirname}/app/views/layouts`);
app.engine('.hbs', hbs({
                    extname: '.hbs',
                    defaultLayout: 'main',
                    layoutsDir: 'app/views/layouts',
                    partialsDir: 'app/views/partials'
                   }));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'test123',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

var server = app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});

module.exports = server;
