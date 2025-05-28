// Interfaz para objetos 
export interface Usuario {
    id: number;
    nombre: string;
    email?: string;
}

// Interfaz para clases
export interface Logger {
    log(mensaje: string): void;
    error?(mensaje: string): void;
 }

export class ConsolaLogger implements Logger {

    public log(mensaje: string): void {
        console.log(`[LOG] ${new Date().toISOString()}: ${mensaje}`)
    }

    public error(mensaje: string): void {
        console.error(`[ERROR] ${new Date().toISOString()}: ${mensaje}`)
    }
 }