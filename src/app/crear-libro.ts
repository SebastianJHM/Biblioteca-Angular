export interface CrearLibro {
    autor: string;
    nombre: string;
    fecha: string;
}

export interface Resp {
    message: string;
    libs: CrearLibro;
}
