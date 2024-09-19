const path =require('path');

//Obtener el archivo desde una ruta absoluta
const fullPath='/home/user/docs/file.txt';
const basename1 =path.basename(fullPath);
console.log("Nombre del archivo: ", basename1);

//ejemplo 2 obtener el nombre del archivo sin la extension
const basename2= path.basename(fullPath,'txt');
console.log("Ejemplo 2- Nombre del archivo sin la extension: ", basename2);

//ejemplo 3: Uso con rutas relativas
const relativePath='src/utils/helpers.js'
const basename3 =path.basename(relativePath);
console.log("Ejemplo 3- Nombre desde una ruta relativa: ",basename3);

//Ejemplo 4: Obtener el nombre de un directorio
const dirPath='var/www/html/';
const basename4 = path.basename(dirPath);
console.log("Ejemplo 4 - Nombre del directorio: ",basename4);

// Ejemplo 5:Rutas con separadores de windows
const windowsPath= 'C:\\Users\\Santiago felipeli\\documents\\clase1.js'
const basename5= path.basename(windowsPath);
console.log("Ejemplo 5 - Nombre del directorio: ",basename5);
