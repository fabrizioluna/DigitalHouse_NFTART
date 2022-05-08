const formLogin = document.addEventListener('submit', (e) => {
    let errors = [];
    const divErrors =       document.getElementById('errorsContainer');
    const username =           document.getElementById('nombre_usuario').value;
    const user =     document.getElementById('usuario').value;
    const email =           document.getElementById('email').value;
    const dateBirthday =     document.getElementById('fecha_nacimiento').value;
    const country =           document.getElementById('pais').value;
    const userCreate =           document.getElementById('usuario_creador').value;
    const password =     document.getElementById('contrasenia').value;
    const password2 =     document.getElementById('contrasenia2').value;



    if (checkValues.range(3, 20, username))        
      errors.push('Campo nombre de usuario esta vacio o no esta en el rango(3 - 20)');

    if (checkValues.range(3, 20, user))        
    errors.push('Campo de usuario esta vacio o no esta en el rango(3 - 20)');

    if (checkValues.range(3, 50, email) || checkValues.verificacionCorreo(email) )        
      errors.push('Campo email esta vacio o no esta en el rango(3 - 20)');

    // if (checkValues.isempty(dateBirthday) || checkValues.verificacionEdad (dateBirthday) < 18)        
    // errors.push('Campo fecha de nacimiento esta vacio o menor de 18 años'); 

    if (checkValues.isempty(country))             
      errors.push('Selecciona un Pais');

    if (checkValues.isempty(userCreate))             
    errors.push('Selecciona un un tipo de usuario');

    if (checkValues.isempty(password) || checkValues.range(5, 15, password))             
    errors.push('Campo de password no debe estar vacia y debe de estar entre 5 y 15 caracteres');

    if (checkValues.isempty(password2) || checkValues.range(5, 15, password2))             
    errors.push('Campo de password no debe estar vacia y debe de estar entre 5 y 15 caracteres');
    
    if(password !== password2)
    errors.push("Password no coincide, favor de validar")


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

  


  


  
  
