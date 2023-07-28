export class Todo{
    // esta clase figurara como el modelo de nuestra aplicacion de TODO
    public id!: number;
    public texto!:string;
    public completado!: boolean;

    constructor(texto: string){
        this.texto = texto
        this.id = Math.floor( Math.random() * (100 + 100000)); // nos generara un id aleatorio para la tarea 
        this.completado = false;
    }
}

