var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nikhilesh Rana' });
});

router.get("/:username",function(req,res){
  console.log(`Hello, ${req.params.username} Bitch Testing Express.js`);
  res.send(`Hi Testing the data as it is ${req.params.username}`);
});



module.exports = router;
