import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private authService: AuthService, private router : Router){

  }
  public Routes = [
    { path: '/', class: 'menu-icon fa fa-tachometer-alt', name: 'Dashboard'},
    { path: '/ingreso-egreso', class: 'menu-icon fa fa-clipboard-list', name: 'Ingresos y Egresos'},
    { path: '/detalle', class: 'menu-icon fa fa-table', name: 'Detalles'}
  ]

  logout(){
    this.authService.logout().then(() => {
      this.router.navigate(['/login'])
    })
  }
}
