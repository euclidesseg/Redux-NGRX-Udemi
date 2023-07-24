import { Action, createReducer, on } from "@ngrx/store";
import * as Actions from "./contador.action";

// export function contadorReducer(state: number = 10, action: Action){

//     switch(action.type){
//         case incrementar.type:
//             return state + 1;

//         case decrementar.type:
//             return state - 1
            
//         default:
//             return state;
//     }
// }

export const initialState = 15

 const _counterReducer = createReducer(
    initialState,
    on( Actions.incrementar, (state) => state + 1 ), // resibe una accion y una funcion que define que hara con esa funcion
    on( Actions.decrementar, (state) => state - 1 ),
    on( Actions.multiplicar, (state,{numero}) => state * numero ),
    on( Actions.dividir, (state,props) => state / props.numero ),
    on( Actions.reset, (state) => state = initialState ),
  );

// on es una funcion que trabaja con el create reducer y le permite seleccionar mas 
// rapidamente la opcion referente e la accion que se esta disparando

export function contadorReducer (state:any, action:Action){
    return _counterReducer(state,action);
}