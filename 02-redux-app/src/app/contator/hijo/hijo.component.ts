import { OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducers';
import * as Actions from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  contador! : number;
  constructor(private store : Store< Appstate>){ }

  ngOnInit(): void {
    // resibo el contador que se emite desde el store desde el boton de incrementar del componente padre
    this.store.select('contador').subscribe((contador) => this.contador  = contador)
  }
 


  multiplicar(){
   this.store.dispatch(Actions.multiplicar({numero:2}))
  }
  dividir(){
   this.store.dispatch(Actions.dividir({numero:4}))
  }

  onResetNieto(event: number){
    // this.onCambioContador.emit(event)
  }
}
