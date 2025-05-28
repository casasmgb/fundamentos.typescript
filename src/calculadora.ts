import { logTiempo } from "./decorators";

export class Calculadora {

    @logTiempo
    public multiplicar (a: number, b: number) {
        return a * b
    }

    @logTiempo
    public suma (a: number, b: number) {
        for(let i = 0; i< 1e7; i++) {}
        return a + b
    }
}
