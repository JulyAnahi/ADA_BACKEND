// Ejercicio 7: Array de tuplas para almacenar productos
// 1. Crea un array de tuplas donde cada tupla almacene el nombre de un
// producto (string), la cantidad disponible (número) y el precio por unidad
// (número).
// 2. Añade tres productos al array con la siguiente información: "Manzana", 10,
// 1.5; "Pan", 20, 2.0; "Leche", 5, 1.2.
// 3. Imprime la información del segundo producto.
let productos:[string, number,number][]=[]               
productos.push(['manzana',10,1.5])
productos.push(['pan',20,2.0])
productos.push(['leche',5,1.2])

console.log(productos[1]);