const express = require('express');
const router = express.Router();
const connection = require('../config/db.js');

router.post('/register', (req, res, next)=>{
  const username = req.body.username;
  const password = req.body.password;
  const dbquery = "insert into users(username, password) values(?, ?);"
  connection.query(dbquery, [username, password], (err, result)=>{
    if(err)console.log(err);
    else res.send(result);
  })
})

router.post('/login', (req, res, next)=>{
  const username = req.body.username;
  const password = req.body.password;
  const dbquery = "select * from users where username = ?";
  connection.query(dbquery, [username], (err, result)=>{
    if(err){
      console.log(err);
    }
    if(result.length > 0){
      if(password == result[0].password){
        res.json({loggedIn: true, username:username});
      }
      else res.json({loggedIn: false, message: "wrong password"});
    }
    else res.json({loggedIn: false, message: "user does not exist"});
  })

})

module.exports = router;
