//Declaracion del modulo path
var path = require("path");
//Se imprime en consola
console.log("Hola Mundo");



//Declaracion de variables 
var a = 5;
var b = 10;

//Forma #1
console.log("El resultado de la suma es: " + (a + b));
//Formas #2
console.log(`los valores son iguales: ${a==b}`);
//Ruta de la carpeta
console.log(__dirname);
//Ruta + Nombre del archivo
console.log(__filename);
//Nombre del archivo
console.log(path.basename(__filename));




