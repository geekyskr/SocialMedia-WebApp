import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Upload from './pages/Upload/Upload.js';

import Navbar from './components/Navbar.js'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Route path="/" exact render = {() => <Home />} />
      <Route path="/register" exact render = {() => <Register />} />
      <Route path="/login" exact render = {() => <Login />} />
      <Route path="/upload" exact render = {() => <Upload />} />
    </Router>
    </>
  );
}

export default App;
