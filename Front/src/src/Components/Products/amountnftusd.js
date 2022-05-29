// import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React from "react";
export const Amountnftusd = ({productList}) => {


//Opcion 2 
const Amountusd = function() {
	let Total = 0;
	const test = productList.nft.rows.map((e) => Total += parseInt(e.precio_actual_usd))
	return Total
}
	return  <div> 	

{/* <!-- $$$ of all products in DB --> */}
	<div className="col-md-4 mb-4">
		<div className="card border-left-success shadow h-100 py-2">
			<div className="card-body">
				<div className="row no-gutters align-items-center">
					<div className="col mr-2">
						<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products USD</div>
						<div className="h5 mb-0 font-weight-bold text-gray-800"> $ { Amountusd () } </div>
					</div>
					<div className="col-auto">
						<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
				    </div>
				</div>
			</div>
		</div>
	</div>




</div>
}
