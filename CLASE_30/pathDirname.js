const path=require('path');

//obtener directorio actual
const filePath='/home/user/docs/file.txt';
const dirName1=path.dirname(filePath);
console.log("Ejemplo 1- Directorio contenedor de file.txt: ",dirName1)

// Ejemplo 2 ruta relativa

const relativePath='src/utils/helpers.js';
const dirName2=path.dirname(relativePath);
console.log("ejemplo 2 -directorio contenedor de helpers.js: ",dirName2);

// Ejemplo 3:Uso con rutas relativas

const windowsPath='c:\\Users\\Admin\\Desktop';
const dirName3=path.dirname(windowsPath);
console.log("ejemplo 3 -directorio contenedor de helpers.js: ",dirName3);
