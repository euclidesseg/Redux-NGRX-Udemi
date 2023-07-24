import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../contador.action';
import { Appstate } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador! : number;
  constructor(private store : Store<Appstate>){}

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => this.contador = contador)
  }
  
  reset(){
    this.store.dispatch(reset())
  }
}
