var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'HPSRLM' });
});



router.get("/login",function(req,res){
  res.render('login',{Announcement : "Hemlo"});
});


module.exports = router;
