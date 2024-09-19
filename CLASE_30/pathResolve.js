const path=require('path');

//Ejemplo 1: resolucion de una ruta relativa desde el directorio
const resolvePath1= path.resolve('file.txt');
console.log('Ejemplo 1- Ruta resuelve desde: ',resolvePath1);
//ejemplo 2 resolucion de multiples segmentos de una ruta relativa
const resolvePath2= path.resolve('/home/user','docs','file.txt')
console.log('Ejemplo 2- Ruta resuelve desde: ',resolvePath2);

//Ejemplo 3
const resolvePath3= path.resolve('/home/users/docs','../images','file.png')
console.log('Ejemplo 3- Ruta resuelve desde: ',resolvePath3);


