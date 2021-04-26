var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('wiki main page');
});
router.get('/about', function(req, res, next){
	res.send('about this wiki')
})

module.exports = router;
