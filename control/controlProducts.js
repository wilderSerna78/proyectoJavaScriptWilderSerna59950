// Función para registrar productos -//- Function to register products.

// Class
class RegistrarProducto {
    constructor(nombre, precio, categoria, referencia, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.referencia = referencia;
        this.cantidad = cantidad;
    }
    activo() {
        console.log("Activo!")
    }
    inactivo() {
        console.log("Agotado!")
    } 
}

const product1 = new RegistrarProducto("Carburador agility", 35000, "Repuesto", "mms-001", 100);
console.log(product1);
product1.activo();
const product2 = new RegistrarProducto("Carburador boxer ct", 30000, "Repuesto", "mms-002", 100);
console.log(product2);
product2.activo();
const product3 = new RegistrarProducto("Piston boxer ct", 50500, "Repuesto", "mms-003", 100);
console.log(product3);
product3.activo();
const product4 = new RegistrarProducto("Piston akt nkd", 55000, "Repuesto", "mms-003", 0);
console.log(product4);
product4.inactivo();