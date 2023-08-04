import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./models/toto.model";
import { filtrosValidos } from "../filtro/store/filtro.action";

@Pipe({
    name: 'filtrotodoPipe'
})
export class FiltroPipe implements PipeTransform{

    transform(todos: Todo[], filtro:filtrosValidos) {
        switch(filtro){
            case 'completadas':
                return todos.filter((todos) => todos.completado)
            case 'pendientes':
                return todos.filter((todos) => !todos.completado)
            case 'todas':
                return todos
            default: return todos
        }
    }

}