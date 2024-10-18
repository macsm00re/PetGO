// Variables para manejar la cantidad y el precio del producto
let cantidad = 1;
const precioUnitario = 11.00; // Precio del producto
const cantidadElemento = document.getElementById("cantidad");
const precioElemento = document.getElementById("precio");
const totalPrecioElemento = document.getElementById("total-precio");

function actualizarPrecio() {
    const nuevoPrecio = (precioUnitario * cantidad).toFixed(3); // Formato de precio con 3 decimales
    precioElemento.textContent = `S/ ${nuevoPrecio}`;
    totalPrecioElemento.textContent = `S/ ${nuevoPrecio}`;
}

// Función para cambiar la cantidad del producto
function cambiarCantidad(valor) {
    cantidad += valor;
    if (cantidad < 1) {
        cantidad = 1; // Evitar que la cantidad sea menor a 1
    }
    cantidadElemento.textContent = cantidad;
    actualizarPrecio(); // Actualizar el precio cuando se cambie la cantidad
}

// Función para eliminar el producto del carrito
function eliminarItem() {
    const filaCarrito = document.querySelector("#carrito-body tr");
    filaCarrito.remove();
    totalPrecioElemento.textContent = "S/ 0.000"; // Establecer el total a 0 después de eliminar el producto
}

// Evento para el botón de pagar
const botonPagar = document.getElementById("pagar-btn");
botonPagar.addEventListener("click", function () {
    alert("Gracias por tu compra!");
    // Aquí podrías agregar la lógica para procesar el pago
});
