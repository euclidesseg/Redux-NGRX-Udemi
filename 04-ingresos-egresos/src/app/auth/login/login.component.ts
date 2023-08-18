import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { SnackBarNotificationService } from 'src/app/shared/services/snackbar-notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(
    private fBuilder : FormBuilder, 
    private autservice:AuthService, 
    private router : Router,
    private notification : SnackBarNotificationService){}

  ngOnInit(): void {
    this.loginForm = this.fBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  loginUsuario(){
    console.log('asdfasdfasfasdf')
    if(this.loginForm.invalid) return;
    const {email, password} = this.loginForm.value;
    this.autservice.SignIn(email,password)
    .then((user) =>{
      console.log(user)
      this.router.navigate(['/'])
    })
    .catch(error => {
      this.notification.showNotification('Usuario no encontrado', 'Aceptar', 'error') //usa el servicio de notificacion
    })
  }
}
