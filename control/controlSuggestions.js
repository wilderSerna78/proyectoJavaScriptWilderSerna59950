// Función para registrar sugerencias. -|- Function for recording suggestions.

class RegistrarSugerencias {
    constructor(fecha, sugerencia){
        this.fecha = fecha;
        this.sugerencia = sugerencia;
    }
}
const sugerencia1 = new RegistrarSugerencias("25/07/2024","Que medios de pagos utilizan.");
console.log(sugerencia1);
const sugerencia2 = new RegistrarSugerencias("26/07/2024","Donde estan ubicados.");
console.log(sugerencia2);
