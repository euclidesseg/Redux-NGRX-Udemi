import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/todo.reducers';
import { filtrar, filtrosValidos } from 'src/app/filtro/store/filtro.action';
import { limiparCompletados } from '../store/todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit{

  filtroActual:filtrosValidos = 'todas'
  filtros:filtrosValidos[] = ['todas', 'completadas', 'pendientes']

  pendientes:number = 0;
  constructor(private store : Store<AppState>){}

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro)
    // this.store.select('todos').subscribe(todos => {
    //   todos.forEach(todo =>{if(!todo.completado) this.pendientes ++})

    // }) hecho por mi 

    this.store.subscribe((state) =>{
      this.filtroActual = state.filtro,
      this.pendientes = state.todos.filter((todo) => !todo.completado).length
    }) //solucion de fernando
  }
  filtrar(filtro:filtrosValidos){
    this.store.dispatch(filtrar({filtro:filtro}))
  }
  limpiarCompletados(){
    this.store.dispatch(limiparCompletados())
  }
}
