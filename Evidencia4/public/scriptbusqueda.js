// Simula una pequeña base de datos de productos
const productos = [
    {
        id: 1, nombre: "Baño en seco", precio: "S/ 19.99", imagen: "images/Component1.png"
    },
    {
        id: 2, nombre: "Arenero", precio: "S/ 19.99", imagen: "images/Card15.png"
    },
    {
        id: 3, nombre: "Whikas para gatos", precio: "S/ 19.99", imagen: "images/Card16.png"
    },
    {
        id: 4, nombre: "Comida de perro", precio: "S/ 19.99", imagen: "images/Card14.png"
    },
    {
        id: 5, nombre: "Arena para gato", precio: "S/ 19.99", imagen: "images/Card12.png"
    },
    {
        id: 6, nombre: "Comida para gato", precio: "S/ 19.99", imagen: "images/Card13.png"
    }
];

let contenedorDestacados = [];
ocultardefoult();

// Función para ocultar contenedores adicionales
function ocultarContenedores() {
    const contenedorCategorias = document.querySelector('.padre_contenedor');  
    const contenedordestacados = document.querySelector('.contenedor_producto2'); 
    const contenedorDestacados = document.querySelector('.destacados');  // El contenedor de destacados

    // Oculta los contenedores
    contenedorCategorias.style.display = 'none';
    contenedorDestacados.style.display = 'none';
    contenedordestacados.style.display = 'none';
}

function ocultardefoult() {
    const contenedorCategorias = document.getElementById('parraf001');  
    contenedorCategorias.style.display = 'none';
}

function mostrarparraf() {
    const contenedorCategorias = document.getElementById('parraf001');  
    contenedorCategorias.style.display = 'block'; 
}

function agregarproducto(item) {
    // Verifica si el producto ya está en el carrito
    if (!contenedorDestacados.some(producto => producto.id === item)) {
        const productoAgregado = productos.find(p => p.id === item);
        contenedorDestacados.push(productoAgregado);
        console.log(contenedorDestacados);
        alert("Producto agregado al carrito");
    } else {
        alert("El producto ya está en el carrito");
    }
}

// Función para mostrar productos
function mostrarProductos(productos) {
    const contenedorDestacados = document.querySelector('.destacados');
    
    // Muestra el contenedor de productos (en lugar de ocultarlo)
    contenedorDestacados.style.display = 'flex'; // Usa 'flex' para mantener los estilos CSS
    
    // Limpia los productos anteriores
    contenedorDestacados.innerHTML = '';

    // Si no hay productos coincidentes
    if (productos.length === 0) {
        contenedorDestacados.innerHTML = '<p>No se encontraron productos</p>';
        return;
    }

    // Genera el nuevo HTML para los productos filtrados
    productos.forEach(producto => {
        const productoHTML = `
            <div class="card">
                <div class="cardicons" onclick="agregarproducto('${producto.id}')">
<i class="material-icons">add_shopping_cart</i>
                </div>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-price">${producto.precio}</p>
                </div>
            </div>
        `;
        contenedorDestacados.innerHTML += productoHTML;
        contenedorDestacados.style.minHeight = `500px`;
    });

    // El contenedor ya está visible con el estilo 'flex', así que no es necesario cambiarlo
}

// Evento del botón de búsqueda
document.querySelector('.search__button').addEventListener('click', function() {
    // Oculta los otros contenedores
    ocultarContenedores();

    // Obtiene el término de búsqueda
    const searchTerm = document.querySelector('.search__input').value.toLowerCase();

    // Filtra los productos que coinciden con el término de búsqueda
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm)
    );

    // Llama a la función para renderizar los productos filtrados
    mostrarProductos(productosFiltrados);
    mostrarparraf();
});

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);
