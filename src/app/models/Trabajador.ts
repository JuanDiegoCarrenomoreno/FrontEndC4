export class Trabajador {
    id?: number;
    cedula: string;
    nombre: string;
    cargo: string;
    sueldo: string;

    constructor(cedula: string, nombre: string, cargo: string, sueldo: string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

}