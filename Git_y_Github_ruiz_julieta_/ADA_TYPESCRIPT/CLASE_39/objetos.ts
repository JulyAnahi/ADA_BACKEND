// definicion de un objeto
let gato={
    color:"naranja",
    nombre:"Arturo",
    edad:1
};

// mostrar la propiedades del objeto 
console.log(gato.color, gato.nombre, gato.edad);

let libro:{titulo:string; autor:string;paginas:number}={
    titulo:"cien años de soledad",
    autor:"gabriel",
    paginas:500
};
console.log(libro.titulo, libro.autor, libro.paginas);

let estudiantes:{nombre:string;edad?:number}={
    nombre:"ana"
};
console.log(estudiantes.nombre, estudiantes.edad ?? "desconocida");

