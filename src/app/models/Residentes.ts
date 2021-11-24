export class Residentes {
    id?: number;
    cedula: string;
    nombre: string;
    apartamento: string;

    constructor(cedula: string, nombre: string, apartamento: string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apartamento = apartamento;
    }

}