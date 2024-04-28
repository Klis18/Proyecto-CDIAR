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


// export interface Recurso {
//     statusCode: string;
//     message:    null;
//     data:       Data[];
// }

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