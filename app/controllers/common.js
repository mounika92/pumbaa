const helper = require('../../lib/helper');
const models = require('../../models/index');

module.exports = {
  homePage: function(req, res) {
    helper.handleResponse(res, null, 'home', null);
  },

  loginPage: function(req, res) {
    helper.handleResponse(res, null, 'login', { title: 'Please Sign In with:' });
  },

  profilePage: function(req, res) {
    helper.handleResponse(res, null, 'profile', { user: req.user });
  },

  matchListPage: function(req, res) {
    models.Match.findAll().then(matches => {
      helper.handleResponse(res, null, 'matchList', { matches: matches });
    });
  },

  matchDetailPage: function(req, res) {
    helper.handleResponse(res, null, 'matchChoice', null);
  },

  matchChoice: function(req, res) {
    console.log(req.body);
    console.log(req.user);
  }
}
