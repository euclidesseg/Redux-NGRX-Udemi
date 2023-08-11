// Creamos la accion 
// una intrefaz simplemente es una regla que le ponemos a los objetos

import { contadorReducer } from "./contador/contador.reducer";

// esta interfaz es tal cual el tipo que le agregamos en la libreria ngrx
interface Action{
    type: string; 
    payload?: any; 
}

// definicion del reducer
function reducerm(state = 10, action : Action){

    switch(action.type){
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state
    }
}

// definicion de la acción paa incrementar de tip accion
const incrementadorAction : Action = {
    type: "INCREMENTAR"
};
// definicion de la acción paa decrementar de tip accion
const decrementadorAction : Action = {
    type: "DECREMENTAR"
};
// definicion de la acción paa multiplicar de tip accion
const multiplicarAction : Action = {
    type: "MULTIPLICAR",
    payload: 2
};
// definicion de la acción paa dividir de tip accion
const dividirAction : Action = {
    type: "DIVIDIR",
    payload: 10
};

// usar el reducer
console.log(contadorReducer(10, incrementadorAction))
console.log(contadorReducer(10, decrementadorAction))
console.log(contadorReducer(10, multiplicarAction))
console.log(contadorReducer(10, dividirAction))

// el reducer siempre recivira el estado actual y la accion
// la accion recibe un typo que define lo que hara esa accion y un parametro
// en este caso el parametro esta permitiendo multiplicar y se agrega en la definicion de la accion
// no en el reducer


// EL reducer tiene todas las acciones que va a opear