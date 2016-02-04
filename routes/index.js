// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', data);
  console.log(data);
  res.render('index');
};
