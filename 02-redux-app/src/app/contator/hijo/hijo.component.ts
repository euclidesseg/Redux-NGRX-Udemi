import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() contador! : number;
  @Output() onCambioContador = new EventEmitter<number>();

  multiplicar(){
    this.contador *= 2
    this.onCambioContador.emit(this.contador)
  }
  dividir(){
    this.contador /= 2
    this.onCambioContador.emit(this.contador)
  }
}
