import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/toto.model';
import { AppState } from '../interfaces/todo.reducers';
import { filtrosValidos } from 'src/app/filtro/store/filtro.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  filtroAplicado:filtrosValidos = 'todas'
  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    // this.store.select('todos').subscribe((todos) => this.todos = todos)
    this.store.subscribe((state) =>{
      this.filtroAplicado = state.filtro
      this.todos= state.todos
    })
  }

}
// el todos que seleccionamos en ('todos') hace referencia al dato que esta en la interfaz AppState mas no al que esta 
// en el modulo declarado