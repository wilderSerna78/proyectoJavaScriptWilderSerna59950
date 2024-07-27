// Clase para registrar proveedores -|- Class to register suppliers.

// Class
class RegistrarProveedor {
    constructor(nombre, nit, categoria, email, telefono, direccion, ciudad){
        this.nombre = nombre;
        this.nit = nit;
        this.categoria = categoria;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
    }
    activo() {
        console.log("Activo!")
    }
    inactivo() {
        console.log("Agotado!")
    } 
}

const proveedor1 = new RegistrarProveedor("CR-Repuesto", "9008253212","Repuestos","crrepuesto@gmail.com","3008262363","carrera 20 #63-28","cartagena")
console.log(proveedor1);