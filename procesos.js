//Devuelve un arreglo donde los muestra la ruta del proceso y 
//y la ruta del archivo
console.log(process.argv);

function param(p)
{
    var index = process.argv.indexOf(p);
    return process.argv[index + 1];
}
//Parametros
var nombre = param('--nombre');
var edad = param('--edad');
//se imprime en consola
console.log(`mi nombre es: ${nombre} y tengo ${edad} años...`);