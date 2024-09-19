const readlineSync=require('readline-sync');

const lenguajes=['js','ruby','python','java'];

const indice=readlineSync.keyInSelect(lenguajes,'¿Cual es tu lenguaje de progrmacion favorito? ');

if(indice===-1){
    console.log('No seleccionaste nigun lenguaje');
}else{
    console.log('Has seleccionado '+lenguajes[indice]);
}