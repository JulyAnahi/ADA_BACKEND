// Ejercicio 11: Arrays y métodos de búsqueda
// 1. Declara un array de números del 1 al 10.
// 2. Usa un método para encontrar si el número 5 está presente en el array.
// 3. Encuentra el índice del número 8 en el array.
// 4. Invierte el orden de los números en el array.
// 5. Muestra el array final por consola

let numeros:number[]=[1,2,3,4,5,6,7,8,9,10];

let incluido= numeros.includes(5);

//console.log(incluido);
if(incluido){
     console.log(`El numero 5 existe dentro de el array`)
}else{
    console.log('el numero no existe en array')
}
let indice= numeros.indexOf(8);

console.log(`el indice del numero 8 es ${indice}`)

let revertido=numeros.reverse();
console.log(numeros);