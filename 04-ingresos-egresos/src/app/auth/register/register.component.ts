import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarNotificationService } from 'src/app/shared/services/snackbar-notification.service';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { EmailValidatorAsync } from 'src/app/shared/validators/email-validator.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator : EmailValidatorAsync,
    private authService: AuthService,
    private router : Router,
    private snackBar: SnackBarNotificationService
  ) {

  }
  ngOnInit(): void {
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(
        '', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],
        [this.emailValidator.validate.bind(this.emailValidator)]
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  crearUsuario(){
    if(this.formRegister.invalid){
      console.log('valido',this.formRegister.valid);
      return;
    }else{
      const {name, email, password} = this.formRegister.value
      this.authService.crearUsuario({nombre:name, email:email, contraseña:password})
      .then((user) =>{
        this.snackBar.showNotification('Registro Exitoso!', 'Continuar', 'success')
        this.router.navigate(['/'])
      })
      .catch((error) => console.error(error))
      this.snackBar.showNotification('Este Correo ya existe', 'Continuar', 'error')
    } 

  }
}
