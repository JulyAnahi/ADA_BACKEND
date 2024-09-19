const readlineSync=require('readline-sync');

const nombre=readlineSync.question('Ingrese su nombre: ');
const edad= readlineSync.question('ingrese su edad: ');
console.log('hola '+nombre+ ' tienes '+edad+' años.');