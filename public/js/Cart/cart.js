
let buttonMarketplace= document.getElementById('key').addEventListener('click',function(e){
    const validation= cartSession.cartExist();
    if(validation.status==false){
        return(cartSession.set)
    }
})


function set(products){
    const previewItems = cartExist()
    if(previewItems.status==true){
        const {data} = data.push(products);
        return sessionStorage.setItem('authUser',JSON.stringify(data))
    }
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
