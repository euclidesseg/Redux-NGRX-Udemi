import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../models/toto.model";
import { todoReducer } from "../store/todo.reducer";
import { filtrosValidos } from "src/app/filtro/store/filtro.action";
import { filtroReducer } from "src/app/filtro/store/filtro.reducer";

export interface AppState{
    todos: Todo[]
    filtro:filtrosValidos
}

// el ActionReducerMap requiere el estado porque es de tipo generico
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer

}