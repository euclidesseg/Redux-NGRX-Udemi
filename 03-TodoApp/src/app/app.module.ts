import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NgRx
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { totoReducer } from './todos/store/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({todos:totoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
