// definicion del reducer

import { Action } from "../ngrx-fake/ngrx";
import { incrementadorAction } from "./contador.action";

export function contadorReducer(state = 0, action : Action){

    switch(action.type){
        case incrementadorAction.type:
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;

        default:
            return state
    }
}
