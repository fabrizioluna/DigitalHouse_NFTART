
// let buttonMarketplace= document.getElementById('key').addEventListener('click',function(e){
//     const validation= cartSession.cartExist();
//     if(validation.status==false){
//         return(cartSession.set)
//     }
// })

function set(products){
    const previewItems = cartExist()
    console.log(products,previewItems)
    if(previewItems.status==true){
        return sessionStorage.setItem('authUser',JSON.stringify([...previewItems.data, products]))
    }
    return sessionStorage.setItem('authUser',JSON.stringify([products]))
}

function cartExist(){
    const cartExist = sessionStorage.getItem('authUser');
    if (cartExist == null)return{ status: false, error: 'No existe el carrito.' }
    return { status: true, data: JSON.parse(cartExist)}
}

const cartSession = {
    remove(product){
        return sessionStorage.removeItem('authUser',JSON.stringify({product:product}))
    },
    clear(){
        return sessionStorage.setItem('authUser', JSON.stringify(null));
    }
}
