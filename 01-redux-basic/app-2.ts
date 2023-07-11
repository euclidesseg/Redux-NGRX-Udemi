import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction, resetAction } from "./contador/contador.action";
import { reducer } from "./contador/contador.reducer";

// usar el reducer
console.log(reducer(10, incrementadorAction))
console.log(reducer(10, decrementadorAction))
console.log(reducer(10, multiplicarAction))
console.log(reducer(10, dividirAction))
console.log(reducer(10, resetAction))


// el reducer siempre recivira el estado actual y la accion
// la accion recibe un typo que define lo que hara esa accion y un parametro
// en este caso el parametro esta permitiendo multiplicar y se agrega en la definicion de la accion
// no en el reducer
// EL reducer tiene todas las acciones que va a opear