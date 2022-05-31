import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { client } from '../../configAxios/configAxios';
import { Layout } from '../layout';
import { Amountnft } from './amountnft';
import { Amountnftusd } from './amountnftusd';
import { Backgrounddashboard } from './backgrounddashboard';
import { Category } from './category';
import { Expensiveproduct } from './expensiveproduct';
import { Lastproduct } from './lastproduct';
import { ProductDB } from './productdb';
import { User } from './user';
import { switchCategory } from './utils/switchCategory';

export const Product = () => {
  const [productData, setProductData] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const call = async () => {
      const { data } = await client.get('http://localhost:3000/api/allproduct');
      setAllProducts(data);
    };

    call();
  }, []);

  useEffect(() => {
    const callProductsByCategory = async () => {
      const { data } = await client.get('http://localhost:3000/api/product');
      setProductData(switchCategory(data, category));
    };

    allProducts !== null && callProductsByCategory();
  }, [category]);

  return (
    <Layout>
      <Backgrounddashboard />
      {allProducts != null ? (
        <Amountnft
          productList={productData === null ? allProducts : productData}
        />
      ) : (
        <p> Cargando </p>
      )}
      {allProducts != null ? (
        <Amountnftusd
          productList={productData === null ? allProducts : productData}
        />
      ) : (
        <p> Cargando </p>
      )}
      <ProductDB setProductData={setProductData} />
      <User />
      {allProducts != null ? (
        <Lastproduct
          productList={productData === null ? allProducts : productData}
        />
      ) : (
        <p> Cargando </p>
      )}
      {allProducts != null ? (
        <Expensiveproduct
          productList={productData === null ? allProducts : productData}
        />
      ) : (
        <p> Cargando </p>
      )}
      <Category setCategoryData={setCategory} />
    </Layout>
  );
};
