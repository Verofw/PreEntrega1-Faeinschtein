// Supongamos que ya tienes un array llamado Remeras con tus productos

// Solicita al usuario que elija una remera
let nombreModelo = prompt(`Elige una remera:\n Remera Art\n Remera Carrie\n Remera Chucky\n Remera It`);
nombreModelo =(nombreModelo);

// Validación de entrada de usuario (asegúrate de hacer la validación adecuada aquí)

// Solicita al usuario que elija el talle
let talle = prompt(`Elige el talle (S, M, L):`);

// Solicita al usuario que elija el color
let color = prompt(`Elige el color (negra, blanca):`);

// Solicita al usuario que ingrese la cantidad
let cantidad = parseInt(prompt(`Ingresa la cantidad:`));

// Validación de entrada de usuario (asegúrate de hacer la validación adecuada aquí)

// Busca el producto en el catálogo utilizando forEach
let productoSeleccionado = null;

Remeras.forEach((remera) => {
    if (
        remera.nombre.toLowerCase() === nombreModelo.toLowerCase() &&
        remera.talle.includes(talle.toLowerCase()) &&
        remera.color.includes(color.toLowerCase())
    ) {
        productoSeleccionado = remera;
    }
});

// Verifica si se encontró el producto
if (productoSeleccionado !== null) {
    // Crea un objeto que represente el producto seleccionado
    const productoEnCarrito = {
        nombre: productoSeleccionado.nombre,
        talle: talle.toLowerCase(),
        color: color.toLowerCase(),
        cantidad: cantidad,
        precioUnitario: productoSeleccionado.precio,
        subtotal: productoSeleccionado.precio * cantidad,
    };

    // Agrega el producto al carrito
    carrito.push(productoEnCarrito);

    console.log(`Agregaste al carrito: ${cantidad} ${productoEnCarrito.nombre} - Talle: ${productoEnCarrito.talle}, Color: ${productoEnCarrito.color}`);
} else {
    console.log('El producto seleccionado no existe en el catálogo o los atributos (talle, color) son incorrectos.');
}
