miStorage = window.sessionStorage.getItem("authUser");

    let cart = JSON.parse(miStorage)
    let cart2 =[...cart]

    let productCart = document.getElementById("productCart")
        function cart3(){cart.map(function(e){
        productCart.innerHTML +=  '<div>'+ e.nombre_nft+' - '+e.precio_actual_usd+'</div>'
    })}
    
    cart.forEach(element => {
        productCart.innerHTML +=  '<div>'+ element.nombre_nft+' - '+element.precio_actual_usd+'</div>'
    });



