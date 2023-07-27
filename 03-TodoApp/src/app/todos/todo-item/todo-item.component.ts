import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { Todo } from '../models/toto.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{


  chkCompletado!: FormControl;
  textInput!:     FormControl;
  editando:boolean = false;

  @Input() todo!: Todo; 
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);
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
