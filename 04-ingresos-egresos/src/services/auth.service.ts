import { Injectable } from '@angular/core';

// firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { map, of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  crearUsuario(usuario: { nombre: string, email: string, contraseña: string }) {

    const { nombre, email, contraseña } = usuario;
    console.log({ nombre, email, contraseña });

    return this.afAuth.createUserWithEmailAndPassword(email, contraseña)
       // mandamos el documento para un usuario
       .then(fbUser =>{
         const usuario:Usuario = {
          uid: fbUser.user?.uid || '',
          nombre: nombre,
          email: email
        }
       })

  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.afAuth.signOut()
  }

  // el siguiente metodo nos dira cuando el usuario inicio o cerro sesion  o cuando el usuairo va a entrar a una ruta 
  // sin estar autenticado para sacarlo de la ruta  este metodo se va a poner en el componente appComponent ya que es por ahi
  // por donde siempre pasara el usuario
  initAuthListener() {
    return this.afAuth.authState
  }

  // este metodo indica si el usuario esta logueado o si hay un usuario logueado esto me sive para implementar el gard
  isAuth(){
    return this.afAuth.authState.pipe(//pipe para encadenar operadores de rxjs
    //el map es un operador de  rxjs que me permite obtener los datos de un observable y reguresar un otro tado o mutar el objeto que entrega el observable
      map((fbUser) =>{
        if (!fbUser){
          return false
        }else{
          return true
        }
      } )
    )
  }
  // ahora que terinamos este metodo ya lo podemos agregar a nuestro canActivate
}
