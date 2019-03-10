var common = require('./app/controllers/common');
var passport = require('./auth/google.js');

module.exports = function(app) {
  app.get('/', common.homePage);

  app.get('/login', common.loginPage);

  app.get('/profile', isLoggedIn, common.profilePage);

  app.get('/matches', common.matchListPage);

  app.get('/match/:id', common.matchDetailPage);

  app.post('/match_choice/edit', common.matchChoice);

  app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email']}
  ));

  app.get('/users/auth/google_oauth2/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      console.log('wooo we authenticated, here is our user object:');
      res.redirect('/profile');
  });
}

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}
