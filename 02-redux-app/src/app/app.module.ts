import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NGRX
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contator/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contator/hijo/hijo.component';
import { NietoComponent } from './contator/nieto/nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador: contadorReducer})
    // Aquí es donde se configura el almacenamiento central de Redux en tu aplicación. 
    // por eso se hace la importacion del Store modulo y se define como es el estado de 
    // la aplicacion con forRoot({contador: contadorReducer})
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
