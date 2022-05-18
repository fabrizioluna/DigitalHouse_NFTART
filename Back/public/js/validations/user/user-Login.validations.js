import { checkValues } from "../checkValues/Checkvalues";

const formLogin = document.addEventListener('submit', (e) => {
    let errors = [];
    const divErrors =       document.getElementById('errorsContainer');
    const email =           document.getElementById('email').value;
    const contrasenia =     document.getElementById('contrasenia').value;
  

    if (checkValues.range(3, 50, email) || checkValues.verificacionCorreo(email) )        
      errors.push('Campo email esta vacio o no esta en el rango(3 - 20)');
      
    if (checkValues.range(3, 20, contrasenia))             
      errors.push('Campo password vacio o no esta en el rango(3 - 20) o no se encuentra de base de datos');
  
    
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
  
  
