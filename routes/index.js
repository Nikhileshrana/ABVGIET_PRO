var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'HPTU' });
});



router.get("/login",function(req,res){
  res.render('login',{Announcement : "Hemlo"});
});


router.post("/check-login",function(req,res){
  const username= req.body.username;
  const password = req.body.password;
  // console.log(username);
  // console.log(password);
  if(username == "nikhileshrana" && password == "Brave222#" || username == "abvgiet" && password == "abvgiet")
  {
    console.log("Logging as Admin Now");
    res.render("admin",{username : req.params.username , password : req.params.password});
  }
  else
  {
    console.log("Logged in as User");
    res.send(`Welcome User ${username}`);
  }
});

router.get("check-signup",function(req,res){
  const username = req.body.username;
  const email = req.body.username;
  const password = req.body.username;

  
});


module.exports = router;
