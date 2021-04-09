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

module.exports = router;
