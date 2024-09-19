const {v1:uuid1,v3:uuid3,v4:uuid4,v5:uuid5}=require('uuid');

const idv1=uuid1();
console.log("UUID v1 (basado en tiempo):",idv1);

//ejemplo 2
const NAMESPACE=uuid3.URL;
const nameV3="berni";
const idV3=uuid3(nameV3,NAMESPACE);
console.log("UUID3(basado en nombre y espacio de nombre)", idV3);

const idV4=uuid4()
console.log("UUID4 v4(aleatorio): ", idV4);

const nameV5="chicasBack";
const idV5=uuid5(nameV5,NAMESPACE);
console.log("basado en nombre y espacio con SHA1",idV5);
