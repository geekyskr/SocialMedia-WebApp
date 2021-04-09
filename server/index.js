const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors());
app.use(express.json());

const connection = require('./config/db.js');
const userRoutes = require('./routes/user.js');

connection.connect((err)=>{
  if(err)throw err;
  else console.log("database connected");
})

app.use('/user', userRoutes);

app.listen(3001, (req, res)=>{
  console.log("server is listening on port 3001")
})
