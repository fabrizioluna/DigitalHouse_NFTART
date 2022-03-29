const fs = require('fs')
const path = require('path');
const bcrypt = require('bcrypt');

// Definimos una variable 'localpath' de donde queda el archivo JSON
// Y asi la reutilizamos en todos lados donde se necesite
const localPath = '../../../../src/data/usuarios.json';
// Creamos otra variable para almacenar todos los datos del JSON
// La definimos encima de todo para poder usarla en cualquier metodo
// de este archivo.
const localStorageUsers = JSON.parse(fs.readFileSync(path.join(__dirname, localPath)),'utf-8');

module.exports = {
    // Aqui tal como en el controllador, recibimos el req.body
    // Pero lo almacenamos en userInput
    registerUser(userInput){
        // Lo unico que haremos será retornar una promesa ya sea satisfactoria o no
        // new Promise definimos la promesa y este recibe una funcion y dentro dos parametros
        // resolve sirve para marcar la respuesta como correcta y reject para marcarla como no correcta.
        return new Promise((resolve, reject) => {
            // Desestructuramos userInput para trabajar más comodo.
            const { 
                nombreCompleto,
                nombreUsuario,
                email,
                fechaNacimiento,
                pais,
                tipoCuenta,
                contrasenia1,
                contrasenia2
            } = userInput;

            // Hacemos la comprobación del usuario
            // Luego almacenamos la respuesta en una variable.
            // Usamos una condicion ternaria para simplificar el código.
            let validateUser = false;
            localStorageUsers.map((user) => (
                (user.nombreUsuario === nombreUsuario) || (user.email === email)
            ) ? validateUser = false : validateUser = true);
                
            // Usamos la variable validateUser donde tiene almacenamos un valor: 'true' o 'false'.
            // Este valor cambia si el usuario esta registrado ya... entonces un true, si no un false.
            // Si la variable es verdadera entonces usamos el metodo 'reject' que lo que hace es 
            // marcarlo como un error en la problema y, dentro del controllador manejamos esa excepcion con un catch.
            if(!validateUser) return reject({ error: [ { msg: 'Nombre de usuario o email en uso' }], old: userInput});
            // Hacemos lo mismo con el que comprueba las contraseñas sean iguales...
            if (contrasenia1 !== contrasenia2) return reject({ error: [ { msg: 'Las contraseñas no coinciden' } ], old: userInput});
            
            // Creamos el nuevo id extrayendo el ultimo de la base local.
            // y luego le agregamos un 1 para que cree el nuevo id y lo alamacenamos.
            const createNextId = localStorageUsers[localStorageUsers.length-1].id + 1;
            // Hasheamos la password y lo almacenamos en una variable.
            const passwordEncrypted = bcrypt.hashSync(contrasenia2, 12);

            // Por ultimo obtenemos la localStorage de la misma variable
            // y pusheamos un nuevo elemento.
            localStorageUsers.push({
                id: createNextId,
                nombreCompleto,
                nombreUsuario,
                email,
                fechaNacimiento,
                pais,
                tipoCuenta,
                contrasenia: passwordEncrypted,
            });
            fs.writeFileSync(path.join(__dirname, localPath), JSON.stringify(localStorageUsers,null,' '));
            // Si todo está bien... terminamos la promesa con un resolve
            return resolve({ message: 'Account create successfully!' })
        })
    }
}