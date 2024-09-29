// Ejercicio 6: Combinando Arrays, Tuplas y Enum
// 1. Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
// 2. Crea un array de tuplas donde cada tupla tenga el nombre de un color
// (string) y el valor correspondiente del enum.
// 3. Añade una tupla más con otro color y su valor del enum.
// 4. Muestra por consola todo el array de tuplas.

export enum colores{
    rojo,
    verde,
    azul
};

//let arrayColores:any=[[colores.rojo],[colores.verde],[colores.azul]]// para ver los colores por el indice 
let arrayColores:[string,number][]=[[colores[colores.rojo],colores.rojo],[colores[colores.verde],colores.verde],[colores[colores.azul],colores.azul]] // para ver un color por su indice 
let nuevoColor:colores

arrayColores.push(['amarillo',colores.azul+1])// (el +1 lo agregue xq no me gustaba que tuviera el mismo indice que otro color que no estaba eliminado)podria hacer un for para ir insertando un color con un indice nuevo con un indice nuevo
console.log(arrayColores)
