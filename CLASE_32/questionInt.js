const readlineSync=require('readline-sync');

const edad=readlineSync.questionInt('Por favor ingresa tu edad: ');

if (edad >=18){
    console.log('Eres mayor de edad puede entrar a este sitio');
}else{
    console.log(' Lo siento nesecitas ser mayor de edad');
};