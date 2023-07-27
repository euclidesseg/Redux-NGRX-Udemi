import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/toto.model';
import { TodoAppState } from '../interfaces/todo.appstate';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []

  constructor(private store: Store<TodoAppState>){}

  ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => this.todos = todos)
  }

}
