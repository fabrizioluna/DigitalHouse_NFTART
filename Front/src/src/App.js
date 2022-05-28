import './App.css';
import { useEffect } from 'react'
import React from 'react';
import { client } from './configAxios/configAxios';
import { Router } from './router/router';
// import { Sidebar } from './Components/sidebar';
// import { Navbaruser } from './Components/navbaruser';
// import {Backgrounddashboard } from './Components/backgrounddashboard';
// import { ProductDB } from './Components/Products/productdb';
// import { Amountnft } from './Components/Products/amountnft';
// import { User } from './Components/Products/user';
// import { Lastproduct } from './Components/Products/lastproduct';
// import { Listproduct } from './Components/listproduct';
// import { Category } from './Components/category';
// import { Footer } from './Components/footer';


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
    <div> <Router/>
      {/* <Sidebar/>
      <Navbaruser/>
      <Backgrounddashboard/>  
      <ProductDB/>
      <Amountnft/>
      <User/>
      <Lastproduct/> 
      <Listproduct/> 
      <Category/>
      <Footer/>  */}
    </div>
  );
}

export default App;
