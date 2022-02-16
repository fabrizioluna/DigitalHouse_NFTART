// Definimos las variables que usaremos para comprobar el estado de las barras.
let isFilterOn = false;


// En el HTML agregamos 'id='buttonCollection' para tener la referencia en -
// Javascript, creamos una constante ya que el valor de esta no la reasignaremos
// y accedemos al id del HTML con 'document.getElementById', notese que es 'ById'
// es decir, buscara en el HTML el id unico con el nombre que recibe.
// Por ultimo creamos el evento con 'addEventListener' y establecemos el tipo de 
// evento que necesitamos, en este caso el click. Hacemos una arrow function
// que unicamente se encarga de activar la funcion controladora showFilter.
const onCollection = document.getElementById('buttonCollection').addEventListener('click', () => {
    showFilter();
});


// Guardamos en una variable la referencia al elemento que queremos ocultar
// o activar del HTML igualmente por el Id unico que le colocamos en la
// etiqueta <section>
const filter = document.getElementById('subMenuFilter');

// Creamos la funcion controladora.
// Hacemos un if que compruebe si la variable isFilterOn es igual a true
// recordemos que un 'if isFilterOn' es igual a 'if isFilterOn === true'.
// En este caso lo omito porque es redundante colocarle el true ya que por defecto -
// las condiciones siempre son true.

function showFilter(){

    // Si la variable es true... entonces usamos 'filter.style.display = none' 
    // para ocultar la barra de navegacion insertando los estilos directamente
    // de JavaScript al id que hacemos referencia en la variable 'filter'.
    // Y establecemos la variable isFilterOn a false.

    if(isFilterOn){
        // Hacemos el return para que no se ejecute lo de abajo.
        filter.style.display = 'none';
        return isFilterOn = false;
    }

    // Si la variable no es true, no es necesario usar un else porque unicamente
    // trabajamos con dos estados 'true' o 'false'.
    // Hacemos lo inverso, pero colocamos 'block' para que la barra sea visible.

    filter.style.display = 'block';
    return isFilterOn = true;
}