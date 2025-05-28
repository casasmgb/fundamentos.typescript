// Tipos primitivos
const nombre: string = 'Pedro';
let edad: number =  31;
let esProgramador: boolean = true;
let cualquierTipo: any = ['3'];

// Arrays, Tupla   (4, 'a')
let pasatiempo: string[] = [ 'Futbol', 'leer' ]
let pasatiempo1: number[] = [ 1, 15, 76 ]
let pasatiempo2: object[] = [ {}, {}, [] ]

let tupla: [string, number] = ['Juan', 5000]

// Tipos personalidas (type alias)
type ID = string | number | boolean;

let idUsuario: ID = '123ABC';
let idCliente: ID = 123;
let idActive: ID = true;

// enum
enum Rol {
    ADMIN = 5,
    USER = 4
}

enum Meses {
    ENERO = 1,
    FEBRERO = 2,
}

let miRol: Rol = 5

export {nombre, edad, esProgramador, cualquierTipo, pasatiempo, tupla, idUsuario, idCliente, Rol, Meses, miRol}