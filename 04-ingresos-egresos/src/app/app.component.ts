import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private ruter : Router){
    this.authService.initAuthListener().pipe(
      map(fbUser =>{
        if(!fbUser){
          this.ruter.navigate(['/auth'])
        }
      })
    )
  }
}
