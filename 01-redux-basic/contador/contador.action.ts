import { Action } from "../ngrx-fake/ngrx";

// definicion de la acción paa incrementar de tip accion
export const incrementadorAction : Action = {
    type: "INCREMENTAR"
};
// definicion de la acción paa decrementar de tip accion
export const decrementadorAction : Action = {
    type: "DECREMENTAR"
};
// definicion de la acción paa multiplicar de tip accion
export const multiplicarAction : Action = {
    type: "MULTIPLICAR",
    payload: 2
};
// definicion de la acción paa dividir de tip accion
export const dividirAction : Action = {
    type: "DIVIDIR",
    payload: 5
};
export const resetAction : Action = {
    type: "RESET",
};