// Ejercicio 15: Arrays multidimensionales
// 1. Declara un array multidimensional que represente una tabla de notas de 3
// estudiantes. Cada subarray debe tener el nombre del estudiante y sus
// notas en tres materias.
// 2. Añade los nombres "Maria", "Pedro" y "Luis", junto con sus respectivas
// notas.
// 3. Imprime el nombre y las notas del segundo estudiante (Pedro).
// 4. Muestra la nota promedio de cada estudiante recorriendo el array

export let estudiantes:[[string,number],...[string,number][]]
estudiantes=[['maria',7],
            ['pedro',4],
            ['luis',10]
];

let estudiante:number=0
console.log(estudiantes[1],[0][1])
 for (let i=0; i < estudiantes.length;i++){
    for (let j=0;j < estudiantes[i].length;j++){
         console.log(estudiantes[i][j]);
    }
 }
 
 export let suma:number=0;

 for(let i=0;i< estudiantes.length;i++){
     suma+=estudiantes[i][1]
 }

 let promedio:number=(suma/estudiantes.length)
 console.log('el promedio de las notas: ',promedio)