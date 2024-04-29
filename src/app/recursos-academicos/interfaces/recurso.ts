export interface RespuestaRecurso {
    statusCode: string;
    message:    string;
    data:       Recurso[];
}
export interface Recurso{
    idRecurso: number;
    nombreRecurso: string;
    asignatura: string;
    nivel: string;
    fechaCreacion: Date;
    estadoRecurso: string;
    tipoRecurso: string;
    usuarioCreacion: string;
}



// export interface Data {
//     idRecurso:       number;
//     nombreRecurso:   string;
//     asignatura:      string;
//     nivel:           string;
//     fechaCreacion:   Date;
//     estadoRecurso:   string;
//     tipoRecurso:     string;
//     usuarioCreacion: string;
// }