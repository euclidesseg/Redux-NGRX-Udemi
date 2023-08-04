import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/todo.reducers';
import * as Actions from '../store/todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{

  formControlTodo!: FormControl;

  constructor(private store : Store<AppState>){}
  ngOnInit(): void {
    this.formControlTodo = new FormControl('',Validators.required)
  }

  agregar(){
    if(!this.formControlTodo.valid) return 
    console.log(this.formControlTodo.value)
    this.store.dispatch(Actions.crear({texto:this.formControlTodo.value}))
    this.formControlTodo.reset()
  }
}
