import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export const Expensiveproduct = ({ productList }) => {
  const [expensiveProduct, setExpensiveProduct] = useState(null);
  
  useEffect(function () {
    const lastProductInDatabase = function () {
      const getExpensiveproduct = productList.nft.rows.sort(function (
        prevValue,
        currentValue
      ) {
        if (
          parseInt(prevValue.precio_actual_usd) >
          parseInt(currentValue.precio_actual_usd)
        ) {
          return 1;
        }
        if (
          parseInt(prevValue.precio_actual_usd) <
          parseInt(currentValue.precio_actual_usd)
        ) {
          return -1;
        }
        return 0;
      });
      return getExpensiveproduct[getExpensiveproduct.length - 1];
    };
    expensiveProduct === null && setExpensiveProduct(lastProductInDatabase());
  }, []);


  return (
    <div>
      {/* <!-- Content Row --> */}
      <div className='row' />
      {/* <!-- Expensive Product in DB --> */}
      <div className='col-lg-6 mb-4'>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              NFT Más valioso de la colección
            </h6>
          </div>
          <div className='card-body'>
            <div className='text-center'>
              {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="assets/images/product_dummy.svg" alt="image dummy"/> */}
            </div>
            <p>{expensiveProduct != null && expensiveProduct.nombre_nft}</p>
            <p>
              {expensiveProduct != null && expensiveProduct.precio_actual_usd}{' '}
              USD{' '}
            </p>
            <p>
              {expensiveProduct != null && expensiveProduct.precio_actual_eth}{' '}
              ETH{' '}
            </p>
            <p>{expensiveProduct != null && expensiveProduct.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
