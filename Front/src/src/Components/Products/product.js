import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { client } from "../../configAxios/configAxios";
import { Layout } from "../layout";
import { Amountnft } from "./amountnft";
import { Amountnftusd } from "./amountnftusd";
import { Backgrounddashboard } from "./backgrounddashboard";
import { Category } from "./category";
import { Lastproduct } from "./lastproduct";
import { Expensiveproduct } from "./expensiveproduct";
import { ProductDB } from "./productdb";
import { User } from "./user";
export const Product = () => {

  const [productData, setProductData] = useState(null)
  const [category, setCategory] = useState(null)
  const [category2, setCategory2] = useState(null)
  const [products, setProducts] = useState(null)

  useEffect(() => {

    const call = async () => {
      // const res = await fetch('http://localhost:3000/api/users');
      const { data } = await client.get('http://localhost:3000/api/product')
      // console.log(res)
      setProducts(data)
    }

    call()

  }, [])

  console.log(category)

  return <Layout>

    {/* <Backgrounddashboard /> */}
    {/* {productData != null ? < Amountnft productList={productData} /> : <p> Cargando </p>} */}
    {/* {productData != null ? < Amountnftusd productList={productData} /> : <p> Cargando </p>} */}
    {/* <ProductDB setProductData={setProductData} /> */}
    {/* <User /> */}
    {/* {productData != null ? <Lastproduct productList ={productData} /> : <p> Cargando </p> } */}
    {/* {productData != null ? <Expensiveproduct productList = {productData}/> : <p> Cargando  </p>} */}
    {category != null ? <Category setCategoryData={setCategory2} ListCategory={category} /> : <p> Cargando </p>}

  </Layout>
}