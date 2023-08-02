import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAll } from '../store/todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  constructor(private store: Store){}
  completado:boolean = false;
  toggleAll(){
    this.completado = !this.completado;
   
    this.store.dispatch(toggleAll({estado: this.completado}))
  }
}
