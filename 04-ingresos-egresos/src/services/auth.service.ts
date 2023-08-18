import { Injectable } from '@angular/core';

// firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  crearUsuario(usuario: { nombre: string, email: string, contraseña: string }) {

    const { nombre, email, contraseña } = usuario;
    console.log({ nombre, email, contraseña });

    return this.afAuth.createUserWithEmailAndPassword(email, contraseña)

  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }
}
