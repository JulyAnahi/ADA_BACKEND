const path =require('path');

//Ejemplo: verificacion de ruta absoluta
const path1='/home/user/docs/file.txt'
const isAbs= path.isAbsolute(path1);
console.log(isAbs);