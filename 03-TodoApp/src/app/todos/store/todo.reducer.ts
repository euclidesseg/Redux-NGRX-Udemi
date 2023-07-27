import { Action, createReducer, on} from "@ngrx/store"
import * as Actions from "./todo.action"
import { Todo } from "../models/toto.model"

// debito a que nuestro estado de tareas va a trabajar con un arreglo de tareas 
// entonces nuestro estado inicial sera un arreglo vacio de Todo
export const initialState:Todo[] = [new Todo('Salvar al mundo'),new Todo('Vencer a tanos'),new Todo('Enamorar a guanda'),new Todo('Golpear a hold')]

const _todoReducer = createReducer(
    initialState,
    on(Actions.crear,(state, props) => [...state, new Todo(props.texto)])
)

export function totoReducer(state:any, action:Action){
    return _todoReducer(state,action);
}

// on(Actions.crear,(state, props) => [...state, new Todo(props.todo)])
// como no sepuede hacer un push porque esto mutaria el estado 
// lo que hacemos es: con el operador de propagacion, es agregar a un nuevo arreglo
// cada uno de los elementos del arreglo estado y mediante new Todo() le estamos asignando el objeto
// que viene atravez de la accion en entonces lo que devolvemos es la destructuracion del estado.

