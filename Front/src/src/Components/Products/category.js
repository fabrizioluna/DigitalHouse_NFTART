import React from "react";

export const Category = ( {setCategoryData, ListCategory} ) => {
    return  <div> 	

{/* <!-- Categories in DB --> */}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categorias en Base de Datos</h6>
								</div>
								<div className="card-body">
									<div className="row">
										{ ListCategory.map((category) =>
										 <div className="col-lg-6 mb-4" onClick={()=> setCategoryData (category.categoria)}>
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													{category.categoria}
												</div>
											</div>
										</div>)}
									</div>
								</div>
							</div>
						</div>
					{/* </div> */}
				{/* </div> */}
				{/* // <!-- /.container-fluid --> */}
			{/* </div> */}
			{/* // <!-- End of Main Content --> */}
				
</div>
}
