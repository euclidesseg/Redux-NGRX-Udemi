import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public Routes = [
    { path: '/', class: 'menu-icon fa fa-tachometer-alt', name: 'Dashboard'},
    { path: '/ingreso-egreso', class: 'menu-icon fa fa-clipboard-list', name: 'Ingresos y Egresos'},
    { path: '/detalle', class: 'menu-icon fa fa-table', name: 'Detalles'}
  ]
}
