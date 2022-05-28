import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { client } from "../../configAxios/configAxios";
import { Layout } from "../layout";
import { Amountnft } from "./amountnft";
import { Backgrounddashboard } from "./backgrounddashboard";
import { Category } from "./category";
import { Lastproduct } from "./lastproduct";
import { Listproduct } from "./listproduct";
import { ProductDB } from "./productdb";
import { User } from "./user";
export const Product = () => {
    
    const [productData, setProductData] = useState (null)
    const [category, setCategory] = useState (null)

    useEffect(() => {

        const call = async() => {
          // const res = await fetch('http://localhost:3000/api/users');
          const res = await client.get('http://localhost:3000/api/category')
          console.log(res)
          setCategory(res.data.countCategory.rows)
        }
    
        call()
    
      }, [])
    
      console.log(category)

    return  <Layout> 	

    <Backgrounddashboard/>  
    {productData   != null ? < Amountnft productList = {productData}/>: <p> Cargando </p>}
    <ProductDB setProductData = {setProductData} />
    <User/>
    <Lastproduct/> 
    <Listproduct/> 
    {category != null ? <Category setCategoryData ={setCategory} ListCategory  = {category}/>: <p> Cargando </p>}

</Layout>
}