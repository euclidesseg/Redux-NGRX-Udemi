import { createAction, props } from '@ngrx/store'


export const crear = createAction(
    '[TODO] crear todo',
    props<{texto:string}>()
)

// me cambia el estado del TODO de completado a falso o vicebersa
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{id:number}>()
)
export const editar = createAction(
    '[TODO] Editar Todo',
    props<{id:number,texto:string}>()
)
export const eliminar = createAction(
    '[TODO] Eliminar Todo',
    props<{id:number}>()
)

// marca todo como completado o viceversa
export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props<{estado:boolean}>()
)
export const limiparCompletados = createAction(
    '[TODO] Limpiar Compledadas',
)