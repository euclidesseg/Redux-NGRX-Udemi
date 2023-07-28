import { Action, createReducer, on} from "@ngrx/store"
import * as Actions from "./todo.action"
import { Todo } from "../models/toto.model"

// debito a que nuestro estado de tareas va a trabajar con un arreglo de tareas 
// entonces nuestro estado inicial sera un arreglo vacio de Todo
export const initialState:Todo[] = [new Todo('Salvar al mundo'),new Todo('Vencer a tanos'),new Todo('Enamorar a guanda'),new Todo('Golpear a hold')]


const _todoReducer = createReducer(
    initialState,
    on(Actions.crear,(state, props) => [...state, new Todo(props.texto)]),
    on(Actions.toggle,(state, props) =>{
        return state.map(todo =>{ // ...recorro cada objeto de la lista de tareas (estado actual)
            if(todo.id === props.id){ // ...verifico que el id que mando a travez de la accion si este en el estado actual
                return{  // ... utlizo el operador de propagacion para retornar un nuevo objeto que representa la tarea actual esto me garantiza que no mutare el arreglo
                    ...todo,  // ... agrego las propiedades del objeto a un nuevo objeto
                    completado: ! todo.completado // .... modifico la propiedade completado del objeto 
                }
            }else{
                return todo // .... si no existe el id retorno el todo 
            } 
        })
    })
)

export function totoReducer(state:any, action:Action){
    return _todoReducer(state,action);
}

// on(Actions.crear,(state, props) => [...state, new Todo(props.todo)])
// como no sepuede hacer un push porque esto mutaria el estado 
// lo que hacemos es: con el operador de propagacion, es agregar a un nuevo arreglo
// cada uno de los elementos del arreglo estado y mediante new Todo() le estamos asignando el objeto
// que viene atravez de la accion en entonces lo que devolvemos es la destructuracion del estado.

