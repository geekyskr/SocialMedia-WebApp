const express = require('express')
const app = express()

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sunil',
  password : 'MysqL@3007',
  database : 'SocialMedia'
});

connection.connect((err)=>{
  if(err)throw err;
  else console.log("database connected");
})

app.listen(3001, (req, res)=>{
  console.log("server is listening on port 3001")
})
