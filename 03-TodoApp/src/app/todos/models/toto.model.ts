export class Todo{
    // esta clase figurara como el modelo de nuestra aplicacion de TODO
    public id!: number;
    public texto!:string;
    public completado!: boolean;

    constructor(texto: string){
        this.texto = texto
        this.id = new Date().getTime(); // me va a obtener una nueva fecha con hora en un formato de numero
        this.completado = false;
    }
}

