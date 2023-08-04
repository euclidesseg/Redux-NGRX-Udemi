import { createReducer, Action, props, on } from "@ngrx/store"
import { filtrar, filtrosValidos } from "./filtro.action"

export const initialState:filtrosValidos = 'todas'

const _filtroReducer = createReducer <filtrosValidos, Action>(
    initialState,
    on(filtrar, (state, props) => props.filtro)
  );

export function filtroReducer(state:any, action:Action){
    return _filtroReducer(state,action)
}