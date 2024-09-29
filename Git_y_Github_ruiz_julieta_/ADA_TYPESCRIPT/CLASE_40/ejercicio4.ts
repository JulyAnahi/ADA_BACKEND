// 1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
// 2. Usa un método para añadir otra fruta al final del array.
// 3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana")
// dentro del array.
// 4. Elimina la última fruta y muestra el array actualizado por consola.

export let frutas:string[]=['manzana','banana','frutilla','naranja','pera'];

frutas.push('durazno');
console.log(frutas);

let encontrado= frutas.indexOf('manzana')
if(encontrado !== -1){
    console.log('la manzana esta en la posicion',encontrado)
}

let eliminado=frutas.pop()
console.log(eliminado);
console.log(frutas);

