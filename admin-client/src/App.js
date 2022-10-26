import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import './css/SideBar.css';
import './css/Login.css';
import './css/General.css';
import './css/Nurse.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import SideBar from './components/sidebar/SideBar'
import Login from './components/login/Login'
import General from './components/general/General'
import Nurse from './components/nurse/Nurse'

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/general" element = {<General/>}/>
        <Route path = "/nurse" element = {<Nurse/>}/>
      </Routes>
    </div>
  );
}

export default App;
