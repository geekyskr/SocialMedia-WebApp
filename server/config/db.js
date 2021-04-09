const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sunil',
  password : 'MysqL@3007',
  database : 'SocialMedia'
});

module.exports = connection;
