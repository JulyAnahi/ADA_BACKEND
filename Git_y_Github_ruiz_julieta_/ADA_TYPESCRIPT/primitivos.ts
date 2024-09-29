//ejemplos de tipos primitivos en typeScript

//String
let nombre:string="julieta ruiz";
let saludo:string=`hola,${nombre}, bienvenida a typeScript`;
console.log(saludo);

//number(enteros , decimales, notacion cientifica)
let entero:number=42;
let decimal:number=3.14;
let cientificos:number=1e5;
console.log("entero:", entero);
console.log("cientifico:", cientificos);
console.log("decimal:", decimal);

//booleanos

let esProfesor:boolean=true;
let tieneTitulo:boolean=false;
console.log("Es profesor?:" , esProfesor);
console.log("Tiene titulo: ", tieneTitulo);
//null
let nulo:null=null;
console.log("valor nulo: " , nulo);
let indefinido:undefined=undefined;
console.log(indefinido);

//symbol
let id:symbol=Symbol("id");
let id2:symbol=Symbol("id2");
console.log("id:", id===id);//verificar
