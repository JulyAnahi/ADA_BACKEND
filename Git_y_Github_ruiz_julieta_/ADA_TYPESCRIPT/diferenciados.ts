//any permite almacenar cualquier tipo de valor
 let tipo:any="hola soy any";
 console.log(tipo);
 tipo=42;
 console.log(tipo);
tipo={name:"typeScript"};
console.log(tipo);
tipo
console.log(tipo);
let prueba= 14;
console.log(prueba);
// unknown
let desconocido:unknown="holaa";
console.log(desconocido);
// verificar el tipo antes de usarlo como string
if(typeof desconocido=== "string"){
    console.log(desconocido.toUpperCase());
};

function mensage(message:string):void{
    console.log(message);
}
mensage("esto es una funcion void");

//never funciones si return o bucles infinitos
// function throwError(errorMsg:string):never{
//     throw new Error(errorMsg);
// };

// throwError("esto es un error");

// function loopInfinito():never{
//     while(true){
//         console.log("hola")
//     }
// };

let nullValue:string| null=null;
console.log(nullValue);
function processData(value:any):void{
    if(typeof value =="string"){
        console.log("el valor de la cadena: ", value);
} else if(value ==="number"){
    console.log("el valor es un numero", value);
}else{
console.log("ya esta")
}
}