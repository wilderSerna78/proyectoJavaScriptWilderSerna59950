const productos = [
    {
        id: 1,
        img: "./../assets/image/productos/farolas/farola-mms-021.jpg",
        codigo: "mms-021",
        nombre: "Farola nkd",
        precio: 45000,
        cantidad: 30
    },
    {
        id: 2,
        img: "./../assets/image/productos/farolas/farola-mms-022.jpg",
        codigo: "mms-022",
        nombre: "Farora libero",
        precio: 46000,
        cantidad: 32
    },
    {
        id: 3,
        img: "./../assets/image/productos/farolas/farola-mms-023.jpg",
        codigo: "mms-023",
        nombre: "Farola boxer ct",
        precio: 40000,
        cantidad: 13
    },
    {
        id: 4,
        img: "./../assets/image/productos/farolas/farola-mms-024.jpg",
        codigo: "mms-024",
        nombre: "Farola pulsar",
        precio: 60000,
        cantidad: 40
    },
    {
        id: 5,
        img: "./../assets/image/productos/farolas/farola-mms-025.jpg",
        codigo: "mms-025",
        nombre: "Farola NMAX",
        precio: 48000,
        cantidad: 20
    },
    {
        id: 6,
        img: "./../assets/image/productos/farolas/farola-mms-026.jpg",
        codigo: "mms-026",
        nombre: "Farola discovery",
        precio: 48000,
        cantidad: 20
    },    {
        id: 7,
        img: "./../assets/image/productos/farolas/farolaHero-mms-027.jpg",
        codigo: "mms-027",
        nombre: "Farora agility",
        precio: 48000,
        cantidad: 20
    },    {
        id: 8,
        img: "./../assets/image/productos/farolas/farola-mms-028-fz16.jpg",
        codigo: "mms-028",
        nombre: "Farola BWS",
        precio: 48000,
        cantidad: 20
    },    {
        id: 9,
        img: "./../assets/image/productos/farolas/farola-mms-029-honda.jpg",
        codigo: "mms-029",
        nombre: "Farola Honda",
        precio: 48000,
        cantidad: 20
    },    {
        id: 10,
        img: "./../assets/image/productos/farolas/farola-mms-030pulsarNs.jpg",
        codigo: "mms-030",
        nombre: "Farola pulsar ns",
        precio: 48000,
        cantidad: 20
    },    {
        id: 11,
        img: "./../assets/image/productos/direccionales/mms-057-direccionalNkd.jpg",
        codigo: "mms-1005",
        nombre: "direccional Nkd",
        precio: 48000,
        cantidad: 20
    },    {
        id: 12,
        img: "./../assets/image/productos/direccionales/mms-058-direccionalBoxer.jpg",
        codigo: "mms-1005",
        nombre: "Direccional Boxer",
        precio: 48000,
        cantidad: 20
    },
]

let carrito = [];

function addToCart(productID) {
    const product = productos.find(p => p.id === productID);
    carrito.push({
        img: product.img,
        id: product.id,
        codigo: product.codigo,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad
    })
    localStorage.setItem("Cart", JSON.stringify(carrito));
//   localStorage.setItem(`carrito ${productID}`, productID)
}

document.addEventListener("DOMContentLoaded", function () {
    function renderizarProductos(productosFiltrados = productos) {
      const productList = document.getElementById("product-list");
      productList.innerHTML = ""; // Limpiar la lista de productos antes de renderizar
  
      productosFiltrados.forEach((producto) => {
        const productoDiv = document.createElement("div");
        productoDiv.innerHTML = `
          <img src="./../${producto.img}" alt="${producto.nombre}" />
          <h5>Nombre:</h5> <p>${producto.nombre}</p>
          <h6>Precio:</h6> <p>$${producto.precio}</p>
          <button onclick="addToCart(${producto.id})" class="button_grey">Agregar al Carrito</button>
          
        `;
        productList.appendChild(productoDiv);
      });
    }
  
    const buscadorInput = document.getElementById("buscador-input");
    buscadorInput.addEventListener("input", function () {
      const textoBusqueda = buscadorInput.value.toLowerCase();
      const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(textoBusqueda)
      );
      renderizarProductos(productosFiltrados); // Renderizar los productos filtrados
    });
  
    renderizarProductos(); // Renderizar todos los productos al cargar la página
  });