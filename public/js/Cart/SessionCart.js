miStorage = window.sessionStorage.getItem("authUser");

const cart = JSON.parse(miStorage);
// const cart2 = cart.map((e) => JSON.parse(e))
console.log(cart)

    // let cart = JSON.parse(miStorage)
    // let cart2 =[...cart]

const productCart = document.getElementById("productCart") 

    cart.map(function(e){
        productCart.innerHTML += insertproduct (e.nombre_nft, e.precio_actual_usd, e.precio_actual_eth, e.autor)
    })
    
    // cart.forEach(element => {
    //     productCart.innerHTML +=  '<div>'+ element.nombre_nft+' - '+element.precio_actual_usd+'</div>'
    // });

    function insertproduct(nombrenft, preciousd, precioeth, autor){ 
        //Codigo que utiliza variables dentro de texto
        return `
            <div class='img'>
                <img src='     '>
            </div>
            <div class='information'>
                <h3 id="nombre_nft" class='information-name'> ${nombrenft} </h3>
                <div class='information-price'>
                    <div id= "precio_actual_usd" class='priceUSD'>
                        <h4> ${preciousd}</h4>
                    </div>
                    <div id= "precio_actual_eth" class='precio_actual_eth'>
                        <h4> ${precioeth}</h4>
                    </div>
                    <div id ="autor" class='autor'>
                    <h4> ${autor}</h4>
                     </div>
                    <div class='trash'>
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        `        
    }
    

