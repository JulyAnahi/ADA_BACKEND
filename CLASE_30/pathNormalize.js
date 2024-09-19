const path =require('path');

//Ejemplo 1 normalizacionm de rutas redundantes

const path1='/home7user//docs/./file.txt';
const ejemplo1=path.normalize(path1);
console.log("Ejemplo 1 -Ruta normalizada: ", ejemplo1);

//Ejemplo 2 :normalizacion de ruta con muchos puntos
const path2='/home/users/docs/../../file.txt';
const ejemplo2=path.normalize(path2);
console.log("Ejemplo 2 -Ruta normalizada: ", ejemplo2);
