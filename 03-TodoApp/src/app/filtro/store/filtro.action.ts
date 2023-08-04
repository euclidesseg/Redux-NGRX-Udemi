import { createAction, props } from "@ngrx/store";

export type filtrosValidos =  'todas' | 'completadas' | 'pendientes'

export const filtrar = createAction(
    '[Filtro] Set filtro',
    props<{filtro:filtrosValidos}>()    
)