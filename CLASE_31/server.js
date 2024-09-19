// const http = require('http');
// const fs = require('fs');
// const PORT = 3000;
// const server = http.createServer((req, res) => {
//     fs.readFile('datos.json', 'utf-8', (err, data) => {
//         if (err) {
//             res.end('No se pudo leer el archivo JSON.');
//             return;
//         }
//         res.setHeader('Content-type', 'application/json');
//         res.end(data)
//     })
// })
// server.listen(PORT, () => {
//     console.log(`Servidor escuchando en http://localhost:${PORT}`);
// })
const net =require('net');
const {v1:uuid1,v3:uuid3,v4:uuid4,v5:uuid5}=require('uuid');

const NAMESPACE=uuid3.URL;
const server=net.createConnection((socket)=>{
    const idV1=uuid1();
    const idV3=uuid3("usuario",NAMESPACE);
    const idV4=uuid4();
    const idV5 =uuid5("chicas",NAMESPACE);

    console.log("UUID v1: ", idV1);
    console.log("UUID v3: ", idV3);
    console.log("UUID v4: ", idV4);
    console.log("UUID v5: ", idV5);

    socket.on('data',(data)=>{
        console.log( `Datos recibidos: ${data}`)

    })
    socket.on('end',()=>{
        console.log("Conexion finalizada");

    })
    server.listenerCount(8080,()=>{
        console.log("servidor escuchando en el puerto 8080");
    });
})