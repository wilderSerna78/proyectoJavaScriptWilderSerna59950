// Metodo de busqueda de clientes. -//- Customer search method.

const clientes = [
    { nit: '71369874', nombre: 'Carlos Andres', apellidos: 'Suarez Zapata', email: 'carlos@motofull.com', telefono: '3202658497', direccion: 'Cl 54 # 36-59', ciudad: 'Bogota' },
    { nit: '73874587', nombre: 'Franco Andres', apellidos: 'Zapata Villegas', email: 'alberto@motobar.com', telefono: '3158794625', direccion: 'Cr 58 # 6-59', ciudad: 'barranquilla' },
    { nit: '70848587', nombre: 'Roberto', apellidos: 'Gil Ospina', email: 'roberto25@motorober.com', telefono: '35896748', direccion: 'Cr 58 # 6-59', ciudad: 'barranquilla' },
    { nit: '78745187', nombre: 'Jhon Jairo', apellidos: 'Quintero Zapata', email: 'jjquintero@motocol.com', telefono: '3005879634', direccion: 'Cr 58 # 6-59', ciudad: 'barranquilla' },
];


// Metodo de llamado del cliente -//- Customer Calling Method.
let clienteElegido = prompt("Ingrese el nombre del cliente.");
let clienteEncontrado = clientes.find(cliente => cliente.nombre === clienteElegido);

if (clienteEncontrado) {
    console.log(clienteEncontrado);
} else {
    console.log("Cliente no encontrado.");
}


