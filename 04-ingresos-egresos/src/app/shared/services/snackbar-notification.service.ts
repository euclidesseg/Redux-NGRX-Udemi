import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarNotificationService {

  constructor(private snackBar: MatSnackBar) { } //injectamos el servicio de snackbar

  showNotification(displayMessage: string, buttonText:string, messageType: 'error'| 'success'){ // mostrara el snackBar con el mensaje que le enviemos
  // a este metodo le pasamos un mensaje obligatorio que se mostrara una accion y como tercer argumento 
  // un objeto de configuracion en donde le enviamos informacion.
    // this.snackBar.open(displayMessage, buttonText,{
    //   duration: 7000, tirmpo de notificacion
    //   horizontalPosition: 'center',   posicion horizontal
    //   verticalPosition: 'top',   posicion vertical
    // })
    
    // Habramos un componente mejor para enviarle informacion
    this.snackBar.openFromComponent(NotificationsComponent,{ // este componente se mostrara como una notificacion
      data:{message: displayMessage, buttonText: buttonText, type:messageType},
      duration: 7000, //tirmpo de notificacion
      horizontalPosition: 'center',   //posicion horizontal
      verticalPosition: 'top',  // posicion vertical
      panelClass: messageType
      // para pasarle el mensaje al componente hacemos una injeccion en el componente de notificacion
    })
  }
}
