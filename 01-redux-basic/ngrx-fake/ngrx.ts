// Creamos la accion 
// una intrefaz simplemente es una regla que le ponemos a los objetos
// esta interfaz es tal cual el tipo que le agregamos en la libreria ngrx
export interface Action{
    type: string; 
    payload?: any; 
}

// interfaz para reducer
export interface Reducer<T> { // retornara siempre el mismo tipo que reciba 
    (state: T, action: Action):T 
}

// Nota: notemos que la intrfaz de Reducer es casi igual que la Action 
// solo que uno de sus atributos es una funcion que recibe un estado y una accion 