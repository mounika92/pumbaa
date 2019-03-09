var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var models = require('../models/index.js');
const dotenv = require('dotenv');

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.API_CLIENT_ID,
    clientSecret: process.env.API_SECRET,
    callbackURL: "http://localhost:5000/users/auth/google_oauth2/callback"
  },
  function(accessToken, refreshToken, profile, done) {
     models.User.findOrCreate({where: {email: profile.emails[0].value },
      defaults: {name: profile.displayName,email: profile.emails[0].value }})
      .spread((user, created) => {
        return done(null, user)
      })
    }
));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	models.User.findOne({where: {id: id}}).then(function(user) {
    done(null, user);
  });
});

module.exports = passport;
