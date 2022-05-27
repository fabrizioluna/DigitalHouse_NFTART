import logo from './logo.svg';
import './App.css';
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

    </div>
  );
}

export default App;
