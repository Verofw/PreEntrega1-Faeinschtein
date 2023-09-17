const carrito = [];

function agregarAlCarrito(producto, talle, color, cantidad) {
    // Buscar el producto en el catálogo
    const productoEncontrado = Remeras.find((remera) => {
        return remera.modelo === producto && remera.talle.includes(talle) && remera.color.includes(color);
    });

    if (productoEncontrado) {
        // Crear un objeto que represente el producto en el carrito
        const itemCarrito = {
            nombre: productoEncontrado.nombre,
            talle: talle,
            color: color,
            cantidad: cantidad,
            precioUnitario: productoEncontrado.precio,
            subtotal: cantidad * productoEncontrado.precio
        };

        // Agregar el producto al carrito
        carrito.push(itemCarrito);

        console.log(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
    } else {
        console.log("El producto seleccionado no existe en el catálogo.");
    }
}

// Ejemplo de cómo agregar una remera IT al carrito
agregarAlCarrito('it', 's', 'gris', 1);
