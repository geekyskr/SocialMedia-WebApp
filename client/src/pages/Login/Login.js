import React, {useState} from 'react';
import './Login.css';
import Axios from 'axios';


function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = ()=>{
    Axios.post('http://localhost:3001/user/login', {username: username, password: password}).then((responce)=>{
      console.log(responce);
    })
  }
  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="LoginForm">
        <input type="text" placeholder="username" onChange={(event)=>{
          setUsername(event.target.value);
        }} />
        <input type="password" placeholder="password" onChange={(event)=>{
          setPassword(event.target.value);
        }} />
        <button onClick = {login}> Login </button>
      </div>
    </div>
  )
}

export default Login;
