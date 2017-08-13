var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  //we're asking the express to render a template index and also passing the variables that can be used in this template
  res.render('index', {
    title: 'Home' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
    appdata.movie.title = req.body.title;
    appdata.movie.releasedate = req.body.releasedate;
    appdata.movie.duration = req.body.duration;
    appdata.movie.genre = req.body.genre;
    appdata.movie.synopsis = req.body.synopsis;
    res.render('index', {
        title: 'Home' });
});

/* GET edit page. */
router.get('/edit', function(req, res, next) {
    res.render('edit', {
        title: 'Edit Recommendation' });
});


module.exports = router;
