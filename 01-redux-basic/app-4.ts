
import {Store, createStore} from 'redux'
import { contadorReducer } from './contador/contador.reducer'
import { incrementadorAction } from './contador/contador.action';

const store: Store = createStore(contadorReducer);
store.subscribe(() => {
    console.log('Subs:', store.getState())
})
store.dispatch(incrementadorAction)
store.dispatch(incrementadorAction)

// en este archivo nos suscribimos a los cambios del state pero de la propia libresia del reducer