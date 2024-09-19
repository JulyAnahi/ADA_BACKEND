const path=require('path');
//Ejemplo Obtener la extension de un archivo de una rurta absoluta
const filePath='/home/user/docs/file.txt';
const extName1=path.extname(filePath);
console.log("Ejemplo 1 -Exytension de archivo: ", extName1);


// Ejemplo 2 manejo de archivos sin extensión

const noExtPath='/home/user/docs/READNAME';
const extName2=path.extname(noExtPath);
console.log("Ejemplo 2 -Exytension de archivo: ", extName2);

// Ejemplo 3 rutas relativas
const multPath='images/photo.large.jpg'
const extName3=path.extname(multPath);
console.log("Ejemplo 3 -Exytension de archivo: ", extName3);

