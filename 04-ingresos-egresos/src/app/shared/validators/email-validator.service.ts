
import {Injectable} from '@angular/core'
import { AsyncValidator, AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable, delay, of} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class EmailValidatorAsync implements AsyncValidator{

    constructor(){
        
    }
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
        const email = control.value;

        const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) =>{ // el subscriber se suscriber manipulara el observable
            console.log(email)
            if(email === 'euclides269u6@gmail.com'){
                subscriber.next({emailExiste:true});
                subscriber.complete();
            }
            else{
                subscriber.next(null);
                subscriber.complete();
            }
        }).pipe(
            delay(2000)
        );
        
        return httpCallObservable;
    }
   
}