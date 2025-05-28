export function logTiempo (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
        console.log(` > Ejecutando el metodo ${key} con argumentos: ${args}`);
        const inicio = performance.now()
        const resultado = originalMethod.apply(this, args)
        const final = performance.now()
        console.log(` > Tiempo de ejecucion: ${final - inicio}ms`)
        return resultado
    }

    return descriptor
}