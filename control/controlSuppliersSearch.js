// Metodo de busqueda de proveedores. -//- Supplier search method..

const proveedores = [
    { nit: '900369874', nombre: 'Carlos Andres', apellidos: 'Suarez Zapata', email: 'carlos@motofull.com', telefono: '3202658497', direccion: 'Cl 54 # 36-59', ciudad: 'Bogota' },
    { nit: '901874587', nombre: 'Franco Andres', apellidos: 'Zapata Villegas', email: 'alberto@motobar.com', telefono: '3158794625', direccion: 'Cr 58 # 6-59', ciudad: 'barranquilla' },
    { nit: '900848587', nombre: 'Roberto', apellidos: 'Gil Ospina', email: 'roberto25@motorober.com', telefono: '35896748', direccion: 'Cr 58 # 6-59', ciudad: 'barranquilla' },
    { nit: '901745187', nombre: 'Jhon Jairo', apellidos: 'Quintero Zapata', email: 'jjquintero@motocol.com', telefono: '3005879634', direccion: 'Cr 58 # 6-59', ciudad: 'barranquilla' },
];

// Metodo de llamado del Supplier -//- Supplier Call Method.
let proveedorElegido = prompt("Ingrese el nombre del proveedor.");
let proveedorEncontrado = proveedores.find(proveedor => proveedor.nombre === proveedorElegido);

if (proveedorEncontrado) {
    console.log(proveedorEncontrado);
} else {
    console.log("Proveedor no registrado.");
}

