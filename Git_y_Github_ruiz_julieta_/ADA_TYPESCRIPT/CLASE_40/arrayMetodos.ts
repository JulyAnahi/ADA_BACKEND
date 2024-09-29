let frutas:string[]=['manzana','banana','pera'];

//agregar una fruta al final
frutas.push('naranja');
console.log('frutas: ',frutas);

//eliminar la ultima fruta
 let ultimaFruta= frutas.pop();
 console.log('fruta eliminada: ', ultimaFruta);
 console.log(frutas);
//agregar una fruta al inicio del arrary
frutas.unshift('mango');
console.log('frutas:', frutas);

//eliminar la primera fruta
let primerafruta=frutas.shift();
console.log(primerafruta);
console.log(frutas);

// buscar la posicion de la pera
let posPera=frutas.indexOf('pera');
console.log('posiscion:',posPera);

//verificar si el array contiene banana

let tieneFruta= frutas.includes('banana');
console.log('tiene banana: ', tieneFruta);

//combinar en una cadena
let cadenaFrutas= frutas.join(', ');
console.log('frutas unidas por coma: ',frutas);

//Invertir el orden
 frutas.reverse();
 console.log('frutas en reversa: ', frutas);

 //concatenar arrays
 let otraFruta :string[]=['frutilla','cereza','arandano'];
 let concatenadas= otraFruta.concat(frutas);
 console.log(concatenadas);
