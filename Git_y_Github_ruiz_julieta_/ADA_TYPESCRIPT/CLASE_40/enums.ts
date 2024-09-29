//definimos un enum numerico

enum colores{
    rojo,//0
    verde,//1
    azul//2
};

//acceder a los valores del enum
let colorFavorito: colores=colores.verde;
console.log('color favorito por numero: ', colorFavorito);

// acceder a la descripcion del enum por su indice
console.log('nombre del color por su indice:',colores[colorFavorito]);

//definicion de enum de cadenas
enum direcciones{
    norte='N',
    sur='S',
    este='E',
    oeste='O'
}
//asignar el valor a una variable
let direccionViaje: direcciones=direcciones.norte;
console.log('direccion del viaje: ', direccionViaje);
