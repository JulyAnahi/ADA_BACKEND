enum dias{
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
};
// let colorFavorito: colores=colores.verde;
// console.log('color favorito por numero: ', colorFavorito);

let diaElegido:dias=dias.lunes;

function mensaje (diaElegido1:dias):string{
   if(diaElegido1 ===(dias.lunes)){
     return 'hoy es lunes';
    console.log('hoy es martes')
   }else if(diaElegido1 ===(dias.miercoles)){
    return'hoy es miercoles'
   }else if (diaElegido1 ===(dias.jueves)){
    return 'hoy es jueves';
   }else if(diaElegido1 ===(dias.viernes)){
    return 'hoy es viernes'
   }else if(diaElegido1 ===(dias.sabado)){
    return 'hoy es sabado'
   }else if(diaElegido1 ===(dias.domingo)){
    return 'hoy es domingo'
   }else{
    return 'error'
   }
}

console.log(mensaje(dias.domingo));