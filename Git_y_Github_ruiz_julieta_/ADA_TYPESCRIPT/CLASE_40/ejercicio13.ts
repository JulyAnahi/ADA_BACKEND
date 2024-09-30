// Ejercicio 13: Array de enums para estados del clima
// 1. Declara un enum llamado Clima con los valores: Soleado, Nublado,
// Lluvioso, Tormentoso.
// 2. Crea un array que almacene una serie de estados del clima usando los
// valores del enum.
// 3. Usa un ciclo para recorrer el array e imprime los valores del clima en cada
// posición.
enum clima{
    soleado,
    nublado,
    Lluvioso,
    tormentoso
}

let arrClima:string[]=[]

for (let i=0; i <= 3;i++){
    arrClima.push(clima[i])
    console.log(arrClima[i]);
};

