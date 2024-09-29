//declaracion e inicializacion de la tupla
export let persona:[string,number];

//inicializacion de la tupla con nombre y edad

persona=['ana',25];

//accediendo a los elementos de la tupla
console.log('nombre: ', persona[0]);
console.log('Edad: ', persona[1]);
persona[1]=26;
console.log('edad actualizada: ', persona[1]);

// deseestructurar la tupla

let[nombre, edad]= persona;
console.log(`${nombre} y ${edad}`);

