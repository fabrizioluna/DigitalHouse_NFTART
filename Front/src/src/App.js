import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import React, { useEffect } from 'react';
// import { client } from './configAxios/configAxios';

function App() {
  useEffect(function(){
    function nombre() { 
      // fetch('http://localhost:3000/api/userscount').then(function(res){
      //   console.log(res.json())
      // })
      // client.get('/users').then(function(res){
      //   console.log(res)
      // })

      
    }
    nombre()
},[])
  return (
    <div>
     
    <p>"Hola Mundo"</p>

=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b
    </div>
  );
}

export default App;
