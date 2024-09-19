const path =require('path');

// Ejemplo 1: Uniendo rutas
const example1=path.join('/user','local','bin');
console.log("Ejemplo 1 -ruta Combinada: ", example1);

//Ejemplo de eliminacion de barras redundantes
const example2=path.join('/user/','/local','bin/');
console.log("Ejemplo 2 Rutas normalizadas sin barras redundantes: ", example2);

//Ejemplo normalizando rutas con  .. :
const example3=path.join('/user','local','..','bin');
console.log("Ejemplo 3 - Ruta normalizada con '..': ",example3);

//Ejemplo 4: Construccion de una ruta relativa multiplataforma: 
const example4=path.join('docs','projects','index.html');
console.log("Ejemplo 4: -Rutas relativas: ",example4);

