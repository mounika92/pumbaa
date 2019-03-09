module.exports = {

  handleResponse: function(res, err, view, params) {
    if (err) {
      this.handleError(res, `Error:: ${err} \n Params - ${JSON.stringify(params)}`)
    }
    else {
      res.render(view, params);
    }
  },

  handleError: function(res, err) {
    logger.error(err);
    newrelic.noticeError(err);
    res.render('error_page', {layout: false});
  }
}
