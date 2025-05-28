export class Persona {
    public nombre: string;  // Accesible desde afuera
    private edad: number;   // Solo se usa dentro de la clase
    protected id: number;   // Clase y Subclases

    constructor (nombre: string, edad: number, id: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }

    public saludar(): void {
        console.log(`Hola me llamo ${this.nombre}`)
    }

    static crearAnimo(): Persona {
        return new Persona('Anonimo', 0, 0)
    }
}

export class Programador extends Persona {
    constructor (nombre: string, edad: number, id: number, public lenguaje: string){
        super(nombre, edad, id)
    }

    // sobreescribir metodo
    public saludar(): void {
        super.saludar();
        console.log(`y se programar en: ${this.lenguaje}`)
    }
}