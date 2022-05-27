import './App.css';
import { useEffect } from 'react'
import React from 'react';
import { client } from './configAxios/configAxios';
import { Sidebar } from './Components/sidebar';
import { Segundo } from './Components/segundo';
import { Tercero } from './Components/tercero';
import { Cuarto } from './Components/cuarto';
import { Quinto } from './Components/quinto';
import { Sexto } from './Components/sexto';
import { Septimo } from './Components/septimo';
import { Octavo } from './Components/octavo';
import { Uno } from './Components/uno';


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
      <Sidebar/>
      <Uno/> 
      <Segundo/>  
      <Tercero/>
      <Cuarto/>
      <Quinto/>
      <Sexto/> 
      <Septimo/>
      <Octavo/> 
    </div>
  );
}

export default App;
