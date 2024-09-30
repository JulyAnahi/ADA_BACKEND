// Ejercicio 10: Uso de enum para niveles de acceso
// 1. Declara un enum llamado NivelesDeAcceso con los valores: Admin,
// Usuario, Invitado.
// 2. Crea una función que reciba un nivel de acceso y devuelva un mensaje
// indicando el tipo de permisos disponibles para ese nivel.
// 3. Usa el enum para llamar a la función con el nivel Usuario y muestra el
// resultado por consola.

enum NivelesDeAcceso{
    admin,
    usuario,
    invitado
}

function usuarios(nivel:NivelesDeAcceso){
    if (nivel===NivelesDeAcceso.admin){
        return 'Tienes privilegios de administrador'
    }else if(nivel===NivelesDeAcceso.usuario){
        return 'tienes privilegios de usuario no tienes permisos para desinstalar o instalar aplicaciones'
    }else if(nivel===NivelesDeAcceso.invitado){
        return 'Solo tienes privelegios como invitado'
    };
};

console.log(usuarios(NivelesDeAcceso.usuario));