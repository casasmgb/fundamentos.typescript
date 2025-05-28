import {nombre, pasatiempo, Rol} from './basic-types'
import {Persona, Programador} from './classes'
import { ConsolaLogger, Usuario } from './interfaces'
import {Calculadora} from './calculadora'

console.log('========= Tipos Basicos ==========')
console.log(nombre)
console.log(pasatiempo)
console.log(Rol)

console.log('========= Clases ==========')
const gabriel = new Persona('Gabriel', 31, 15)
gabriel.saludar()

const maria = new Programador('Maria', 25, 85, 'Perl')
maria.saludar()

console.log('========= Interfaces ==========')
const usuario: Usuario = {id: 1, nombre: 'Manuel'}
console.log(usuario)

const logger = new ConsolaLogger();
logger.log('Mensaje informativo');
logger.error('Alerta de acciones'); 

console.log('========= Decorador ==========')

const calc = new Calculadora()
console.log('Multiplicacion: ', calc.multiplicar(5, 7))
console.log('Suma: ', calc.suma(2, 7))