import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.action";

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
    on(incrementar, (state) => state + 1), // resibe una accion y una funcion que define que hara con esa funcion
    on(decrementar, (state) => state - 1),
  );

// on es una funcion que trabaja con el create reducer y le permite seleccionar mas 
// rapidamente la opcion referente e la accion que se esta disparando

export function contadorReducer (state:any, action:Action){
    return _counterReducer(state,action);
}