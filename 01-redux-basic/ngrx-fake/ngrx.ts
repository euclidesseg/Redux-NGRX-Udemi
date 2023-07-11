// Creamos la accion 
// una intrefaz simplemente es una regla que le ponemos a los objetos
// esta interfaz es tal cual el tipo que le agregamos en la libreria ngrx
export interface Action{
    type: string; 
    payload?: any; 
}