// Función para registrar clientes -//- Function to register clients.

// Class
class RegistrarClientes {
    constructor(nombre, nit, apellidos, email, telefono, direccion, ciudad){
        this.nit = nit;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
    }
    activo() {
        console.log("Activo!")
    }
    inactivo() {
        console.log("Inactivo!")
    } 
}

const cliente1 = new RegistrarClientes("73569874","Carlos andres","sepulveda ruiz","carlos25@gmail.com","3255608978","cll 24 sur # 63-89","Cali");
console.log(cliente1);


