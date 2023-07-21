import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NGRX
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contator/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HijoComponent } from './contator/hijo/hijo.component';
import { NietoComponent } from './contator/nieto/nieto.component';
import { environment } from 'src/environment/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador: contadorReducer}),
    // Aquí es donde se configura el almacenamiento central de Redux en tu aplicación. 
    // por eso se hace la importacion del Store modulo y se define como es el estado de 
    // la aplicacion con forRoot({contador: contadorReducer})
    StoreDevtoolsModule.instrument({
      maxAge: 25, // 25 indica cuantos estados quiero mantener en las herramientas de ngrx
      logOnly: environment.production, // si estamos e produccion las devtools solo seran de lectura es decir no van a modificar nada
      // y si no vamos a poder cambiar algo del estado desde la erramienta de redux devtools
    }),
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
