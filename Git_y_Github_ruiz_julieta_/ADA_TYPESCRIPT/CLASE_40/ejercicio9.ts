// Ejercicio 9: Operaciones con tuplas de estudiantes
// 1. Declara una tupla que almacene el nombre de un estudiante (string), su
// promedio (número), y si ha aprobado (booleano).
// 2. Inicializa la tupla con los valores "Ana", 8.5, true.
// 3. Crea una segunda tupla con los valores "Pedro", 6.2, true.
// 4. Modifica la nota de Pedro a 4.9 y actualiza el valor de aprobado a false.
// 5. Muestra por consola la información de ambos estudiantes.

export let estudiantes:[string,number,boolean][]=[["Ana",8.5,true]]
estudiantes.push(['pedro',6.2,true]);
console.log(estudiantes)
//estudiantes[1]=['pedro',6.2,false];
estudiantes[1][2]=false;
console.log(estudiantes);
