const readlineSync=require('readline-sync');

const continuar=readlineSync.keyInYN('Desea continuar: ');

if(continuar){
    console.log('continuando con la aplicacion..')
}else{
        console.log('operacion cancelada')
    }
