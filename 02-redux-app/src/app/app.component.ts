import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contator/contador.action';

interface Appstate{
  contador:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador!: number;
  
  constructor(private store: Store<Appstate>){// necesito especificar que tipo de datos va a tener este store
    // nos suscribimos a los cambios del store
    this.store.subscribe((state) => this.contador = state.contador)
  } 
  

  

  incrementar(){
    this.store.dispatch(actions.increment())
  }
  decrementar(){
    this.store.dispatch(actions.decrementar())
  }
}



// Notas: Action: Cuando se llama al método this.store.dispatch(actions.increment())
// o this.store.dispatch(actions.decrementar()) desde los métodos incrementar() 
// o decrementar() respectivamente, se está enviando una acción a través del store.

// Reducer: El reducer que se ha definido anteriormente , contadorReducer, es el encargado
// de recibir la acción que se envia a travez del dispatch y modificar el
// estado en función del tipo de acción que recibe.

// Store: El store es el que mantiene el estado actual de la aplicación
//  y gestiona la comunicación entre los reducers y los componentes. 