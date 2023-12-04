export class Productos {
    // Propiedades del modelo
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
  
    // Puedes agregar un constructor si deseas inicializar propiedades
    constructor(obj: any) {
        this.id = obj && obj.id;
        this.nombre = obj && obj.nombre || '';
        this.descripcion = obj && obj.descripcion || '';
        this.precio = obj && obj.precio || '';
        this.cantidad = obj && obj.cantidad || '';
    }
  }
  
  
