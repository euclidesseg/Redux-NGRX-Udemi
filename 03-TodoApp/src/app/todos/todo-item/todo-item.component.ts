import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { Todo } from '../models/toto.model';
import { Store } from '@ngrx/store';
import { TodoAppState } from '../interfaces/todo.appstate';
import * as Actions from '../store/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{


  chkCompletado!: FormControl;
  textInputEditing!:     FormControl;
  editando:boolean = false;

  @Input() todo!: Todo; 
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;


  constructor(private store: Store<TodoAppState>){

  }
  
  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.textInputEditing = new FormControl(this.todo.texto, Validators.required);

    // completar o desmarcar un TODO mediante accion
    // nos suscribimos a los cambios del chekCompletado

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(Actions.toggle({id:this.todo.id}))
    })
  }

  editar(){
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select() 
    }, 1);
  }

  terminarEdision(){
    this.editando = false;
  }

}
