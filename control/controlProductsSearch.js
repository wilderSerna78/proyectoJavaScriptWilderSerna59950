// Metodo de busqueda de productos. -//- Product search method.

const productos = [
    { nombre: 'Carburador agility', precio: 35000, categoria: 'Repuesto', referencia: 'mms-001', cantidad: 100 },
    { nombre: 'Carburador boxer ct', precio: 30000, categoria: 'Repuesto', referencia: 'mms-002', cantidad: 100 },
    { nombre: 'Piston boxer ct', precio: 50500, categoria: 'Repuesto', referencia: 'mms-003', cantidad: 100 },
    { nombre: 'Piston akt nkd', precio: 55000, categoria: 'Repuesto', referencia: 'mms-004', cantidad: 0 },
];

// Metodo de llamado del producto -//- Product calling method.
let productoElegido = prompt("Ingrese el nombre del producto.");
let productoEncontrado = productos.find(producto => producto.nombre === productoElegido);

if (productoEncontrado) {
    console.log(productoEncontrado);
} else {
    console.log("Producto no encontrado.");
}

