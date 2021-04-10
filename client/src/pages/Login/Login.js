import React, {useState} from 'react';
import './Login.css';
import Axios from 'axios';


function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const login = ()=>{
    Axios.post('http://localhost:3001/user/login', {username: username, password: password}).then((responce)=>{
      if(responce.data.loggedIn){
        localStorage.setItem ("loggedIn", true);
        localStorage.setItem ("username", responce.data.username);
      }
      else{
        setErrorMessage(responce.data.message);
      }
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
        <h2 style = {{color: "red"}}>{errorMessage}</h2>
      </div>
    </div>
  )
}

export default Login;
