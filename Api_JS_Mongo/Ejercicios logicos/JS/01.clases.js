// Clases Primitivas

//Clase String
var string = new String("Esto es un string");
console.log(string);

//Clase Number
var number = new Number(12);
console.log(number);

// Clase boolean

var boolean = new Boolean(false);
console.log(boolean);


/* Clases Compuestas */
//Clase Array
var array = new Array("Rojo","Verde","Blue");
console.log("array",array);

// Clase Object

var object = new Object({nombre: "Pedro",edad:30});
console.log(object);

/*  Clases creadas por el programador */

// Creamos el prototipo
function Persona() {

    //Propiedad públicas
    this.nombre;
    this.edad;

}

var yo = new Persona();
yo.nombre = "Erick";
yo.edad = "22 años";
console.log("yo",yo);

// Clases con parametros
function Animales(nombre,raza) {
    
    this.nombre = nombre;
    this.raza = raza;
}

var mascota = new Animales("Perro","Pitbull");
console.log("mascota",mascota);