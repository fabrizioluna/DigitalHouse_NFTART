import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Listproduct } from "./expensiveproduct";
export const Lastproduct = ( {productList}) => {

	const [lastproduct, setlastProduct] = useState(null)
	useEffect(function(){

		const lastProductInDatabase = function () {
			const lastProduct = productList.nft.rows.sort(function (prevValue, currentValue) {
				if (prevValue.id > currentValue.id) {
				  return 1;
				}
				if (prevValue.id < currentValue.id) {
				  return -1;
				}
				return 0;
			  }).pop()
			  console.log(lastProduct)
			  setlastProduct(lastProduct)
			};
		lastProductInDatabase()
		},[] )
	return  <div> 	

{/* <!-- Content Row --> */}
					<div className="row"/>

					{/* <!-- Last Product in DB --> */}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Ultimo Producto en Base de Datos</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										{/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="assets/images/product_dummy.svg" alt="image dummy"/> */}
									</div>
									<p>{lastproduct != null && lastproduct.nombre_nft}</p>
									<p>{lastproduct != null && lastproduct.precio_actual_usd} USD </p>
									<p>{lastproduct != null && lastproduct.precio_actual_eth} ETH </p>
									<p>{lastproduct != null && lastproduct.descripcion}</p>
								</div>
							</div>
						</div>

</div>
}
