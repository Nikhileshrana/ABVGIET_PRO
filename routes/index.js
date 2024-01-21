var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'HPSRLM' });
});



router.get("/login",function(req,res){
  res.render('login',{Announcement : "Hemlo"});
});


router.get("check-login",function(req,res){
    const username = req.body.username;
    const password = req.body.username;
    console.log(username);
    console.log(password);
    if(username == "nikhilesh")
    {
      res.send("Welcome Admin");
    }
    else
    {
      res.send("Welcome User")
    }
});


router.get("check-signup",function(req,res){
  const username = req.body.username;
  const email = req.body.username;
  const password = req.body.username;
});


module.exports = router;
