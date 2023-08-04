import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './todos/interfaces/todo.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // 25 indica cuantos estados quiero mantener en las herramientas de ngrx
      logOnly: environment.produccion, // si estamos e produccion las devtools solo seran de lectura es decir no van a modificar nada
      // y si no vamos a poder cambiar algo del estado desde la erramienta de redux devtools
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
