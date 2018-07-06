/* 
 Objetos: Es una colección de propiedades y métodos
*/

var object = {

    // Una propiedad es una asociación de un nombre y un valor
    nombre: "Alonzo",
    edad: 22,
    // El método es una función dentro de un objeto.
    descripcion: function () {
        console.log("Su nombre es: " + this.nombre + " y tiene " + object.edad + " años.");
    },
    saludar: function(saludo){
        console.log(saludo+ " " + this.nombre);
    }
}
console.log("Nombre: ",object.nombre);
console.log("Edad: ",object.edad);
object.descripcion();
object.saludar("Hola");

/* Objetos Primitivos */

// El objeto Date se utiliza para las fechas y horas.

var d = new Date();
console.log(d);

var y = d.getFullYear();
console.log(y);