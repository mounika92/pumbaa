const helper = require('../../lib/helper');

module.exports = {
  homePage: function(req, res) {
    helper.handleResponse(res, null, 'home', null);
  },

  loginPage: function(req, res) {
    helper.handleResponse(res, null, 'login', { title: 'Please Sign In with:' });
  },

  profilePage: function(req, res) {
    helper.handleResponse(res, null, 'profile', { user: req.user });
  }
}
