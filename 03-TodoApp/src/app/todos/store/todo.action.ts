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