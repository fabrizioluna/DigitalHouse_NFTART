import { checkValues } from "../checkValues/Checkvalues";

const formEdit = document.addEventListener('submit', (e) => {
    let errors = [];
    const divErrors = document.getElementById('errorsContainer');
    const nombre_nft =        document.getElementById('nombre_nft').value;
    const autor =             document.getElementById('autor').value;
    const descripcion =       document.getElementById('descripcion').value;
    const tematica =          document.getElementById('tematica').value;
    const precio_actual_eth = document.getElementById('precio_actual_eth').value;
    const precio_actual_usd = document.getElementById('precio_actual_usd').value;


    if (checkValues.range(3, 20, nombre_nft))        
      errors.push('Campo nombre nft vacio o no esta en el rango(3 - 20)');
      
    if (checkValues.range(3, 20, autor))             
      errors.push('Campo autor vacio o no esta en el rango(3 - 20)');
  
    if (checkValues.range(30, 200, descripcion))       
      errors.push('Campo descripcion vacio o no esta en el rango(30 - 200)');
  
    if (checkValues.range(20, 100, tematica))          
      errors.push('Campo tematica vacio o no esta en el rango(20 - 100)');

    if (checkValues.rangeInt(5, 100000, precio_actual_eth)) 
      errors.push('Campo precio actual eth vacio o no esta en el rango(1 - 100000)');
  
    if (checkValues.rangeInt(5, 100000, precio_actual_usd)) 
      errors.push('Campo precio actual usd vacio o no esta en el rango(1 - 100000)');
  
    if (errors.length > 0) {
      e.preventDefault();
      // Reseteamos el div a blanco para evitar que
      // Se dupliquen los mensajes de error.
      divErrors.innerHTML = '';
      errors.map((err) => divErrors.innerHTML += "<li>" + err + "</li>")
      // Reseteamos tambien la variable.
      errors = [];
    }
  });

  const checkValues = {

    //    Metodo para verificar si esta vacio el campo.
   isempty: (value) => value === '' ? true : false,
   // Metodo para hacer un rango de caracteres.
   range: (min, max, value) => value.length > min && value.length < max ? false : true,
   // Metodo para hacer un rango pero de números.
   rangeInt: (min, max, value) => parseInt(value) > min && parseInt(value) < max ? false : true, 
 
   verificacionCorreo: function (correo){
     const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
         if(expReg.test(correo)){
             return false
         }else{
             true
         }},

   verificacionEdad: function(date){
       const today = new Date();
       const birthday = new Date(date);
       let yearsold = today.getFullYear() - birthday.getFullYear();
       const month = today.getMonth() - birthday.getMonth();
       if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
               yearsold--;
       }
   },
   
   }    
  
