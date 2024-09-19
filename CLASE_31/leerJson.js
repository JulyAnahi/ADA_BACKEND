const fs=require('fs');
// leer el archivo JSON persona.json

fs.readFile('persona.json','utf-8',(err,data)=>{
    if(err){
        console.log('Error al leer el archivo JSON: ',err);
        return;
    }

    //mostrar
console.log("Contenido del archivo Json(como texto)");
console.log(data);

const persona =JSON.parse(data);
console.log(persona);


//acceder a los valores del objeto js
console.log("nombre",persona.nombre)

//modificar el objeto y convertirlo a json
persona.edad=31;
//convertimos a js
const nuevoJSON=JSON.stringify(persona,null,2);
//null y 2 son para formatear el json con identacion
fs.writeFile('nuevaPersona.json',nuevoJSON,(error)=>{
    if(err){
        console.log("error al escribir el JSON",err);
        return;
    }
    console.log("jSON modificando guardado en nuevapersona.json")
})

})
