import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import './css/SideBar.css';
import './css/Login.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import SideBar from './components/sidebar/SideBar'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
