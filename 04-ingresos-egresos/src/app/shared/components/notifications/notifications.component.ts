import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data:any,
    public snackBarRef: MatSnackBarRef<NotificationsComponent> // para serrar el snackbar con el boton
  ){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
