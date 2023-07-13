import {Action, Reducer} from './ngrx-fake/ngrx'
import {contadorReducer} from './contador/contador.reducer'
import * as Actions from './contador/contador.action'

class Store<T> {

    // el reducer debe tener un tipo por lo que vamoos hasta la libreria para crear una nueva interfaz
    constructor(private reducer:Reducer<T>,  private state: T){}

    getState(){
        return this.state;
    }
    dispatch(action: Action){
        this.state = this.reducer(this.state, action); // es justo aqui donde le paso el estado del store a la funcion reductora.
    }

}

const store = new Store(contadorReducer, 10); 
// la contante store recibe un reducer este reducer ya tiene la accion y el estado
// 10 es el estado inicial
// como es un objeto de tipo de esta clase me recibe los atributos que me pide el constructor

console.log(store.getState());

store.dispatch(Actions.incrementadorAction);
console.log(store.getState());

store.dispatch(Actions.multiplicarAction);
console.log(store.getState());
