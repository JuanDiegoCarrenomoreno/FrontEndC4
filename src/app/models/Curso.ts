export class Curso {
    id?: number;
    codigo: number;
    nombre: string;
    modalidad: string;
    jornada: string;

    constructor(codigo: number, nombre: string, modalidad: string, jornada: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.jornada = jornada;
    }

}