import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { EmailValidatorAsync } from 'src/app/shared/validators/email-validator.service';

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
    private emailValidator : EmailValidatorAsync
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
      console.log(this.formRegister.value);
    } 

  }
}
