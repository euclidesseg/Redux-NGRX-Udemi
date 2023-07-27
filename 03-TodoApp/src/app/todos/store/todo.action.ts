import { createAction, props } from '@ngrx/store'


export const crear = createAction(
    '[TODO] crear todo',
    props<{texto:string}>()
)