import { Action } from "@ngrx/store";
import { decrementar, increment } from "./contador.action";

export function contadorReducer(state: number = 10, action: Action){

    switch(action.type){
        case increment.type:
            return state + 1;

        case decrementar.type:
            return state - 1
            
        default:
            return state;
    }
}