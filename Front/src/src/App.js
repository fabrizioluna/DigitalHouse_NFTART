import './App.css';
import { useEffect } from 'react'
import React from 'react';
import { client } from './configAxios/configAxios';

function App() {


  useEffect(() => {

    const call = async() => {
      // const res = await fetch('http://localhost:3000/api/users');
      const res = await client.get('http://localhost:3000/api/users')
      console.log(res)
    }

    call()

  }, [])
 
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}

export default App;
