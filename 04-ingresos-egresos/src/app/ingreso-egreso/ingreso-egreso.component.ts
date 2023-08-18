import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

interface Item {
  name: string,
};

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.css']
})
export class IngresoEgresoComponent {
  item$!: Observable<Item[]>;

  constructor() {
  }
}
