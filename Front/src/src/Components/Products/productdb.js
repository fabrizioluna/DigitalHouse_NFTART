import React from "react";
import { useEffect } from "react";
import { useCallService } from "../../hooks/useCallService";
import { allProduct } from "./Service/service";
export const ProductDB= ({setProductData}) => {
  
const {call} = useCallService (allProduct)   

useEffect(function(){
    setProductData(call)
}, [call] )

 return  <div> 	

<div id="wrapper">



{/* <!-- Amount of Products in DB --> */}
<div className="col-md-4 mb-4">
<div className="card border-left-primary shadow h-100 py-2">
    <div className="card-body">
        <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800"> {call !== null && call.nft.count }   </div>
            </div>
            <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
}


