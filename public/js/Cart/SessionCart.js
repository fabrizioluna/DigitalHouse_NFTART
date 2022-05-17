miStorage = window.sessionStorage.getItem("authUser");

const cart = JSON.parse(miStorage);
// const cart2 = cart.map((e) => JSON.parse(e))
console.log(cart)

    // let cart = JSON.parse(miStorage)
    // let cart2 =[...cart]

    cart.map(function(e){
        productCart.innerHTML +=  '<div>'+ e.nombre_nft+' - '+e.precio_actual_usd+'</div>'
    })
    
    // cart.forEach(element => {
    //     productCart.innerHTML +=  '<div>'+ element.nombre_nft+' - '+element.precio_actual_usd+'</div>'
    // });



