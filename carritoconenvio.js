const SI = 'si';
const NO = 'no';
const RETIRO = `retiro`;
const ENVIO = `envio`;
let cantidad;
let nombreUsuario;
let precio;
let nombreProducto;
let total = 0;
let continuar;
let domicilio;
let detalleProductos = 'Producto    Cantidad       Precio     Subtotal \n';
let detalle;
let tipoRetiro;


function validacionCantidad(unidades) {
    while (unidades <= 0 || unidades== ``) {
        unidades = prompt(`La cantidad de productos no es válida.\nPor favor vuelva a ingresar cuántos productos quiere agregar:`);
    }
    return unidades;
}

function validacionPrecio(valor) {
    while (valor <= 0 || valor== ``) {
        valor = prompt(`El costo ingresado no es válido, por favor ingrese un número mayor 0`);
    } 
    return valor;
}

function validacionSiNo(respuesta) {
    while (respuesta !== SI && respuesta !== NO) {
        respuesta = prompt (`Respuesta invalida, por favor vuelva a ingresar su respuesta\nsi/no: `)
    }
    return respuesta;
}

function validacionEnvio (entrega) {
    while (entrega!== ENVIO && entrega!== RETIRO) {
        entrega = prompt (`Respuesta inválida, por favor vuelva a ingresar su respuesta\nretiro/envio`)
    }
    return entrega;
}

nombreUsuario = prompt(`Bienvenidos a FDS Shop!\nPor favor, ingrese su nombre para personalizar su pedido:`);
do {
    nombreProducto = prompt(`Bienvenido/a ${nombreUsuario}! Qué producto quiere agregar al carrito?`);
    cantidad = +prompt(`Cuántas unidades quiere cargar?\nPor favor ingrese la cantidad en numeros`);
    cantidad = validacionCantidad(cantidad);
    precio = +prompt(`Ingrese precio de producto $`);
    precio = validacionPrecio(precio);
    total = total + precio * cantidad;
    continuar = prompt(`Desea seguir agregando productos al carrito?\nsi/no`);
    continuar = validacionSiNo(continuar);
    detalle = `${nombreProducto}         ${cantidad}             ${precio}               ${precio * cantidad}\n`;
    detalleProductos = detalleProductos + detalle;

} while (continuar == SI);

detalleProductos = detalleProductos + `Total: $${total}`

tipoRetiro = prompt(`Quiere retirar su pedido por sucursal o recibirlo en su domicilio?\nIngrese la opción elegida: retiro/envio`);
tipoRetiro= validacionEnvio(tipoRetiro);
if (tipoRetiro == ENVIO) {
    tipoRetiro = alert(`Perfecto! A continuacion podrá ingresar el domicilio donde quiere recibir sus productos. Recuerde que el envío se paga al recibirlo y tiene una tardanza de aprox 5 días habiles`);
    domicilio = prompt(`Por favor ingresá el domicilio donde quiere recibir su pedido:\nCalle XXX, Localidad, cualquier dato de relevancia que considere mencionar`);
    alert(`${detalleProductos}\nLo recibirá en los próximos 7 dias hábiles en su domicilio de la calle ${domicilio}\nAgradecemos mucho su compra ${nombreUsuario}!`);
} else {
    alert(`${detalleProductos}\nTu pedido estará disponible para retiro en los proximos 7 dias en nuestra sucursal ubicada en Av Corrientes 5485 de lunes a viernes de 9 a 18hrs\nAgradecemos mucho su compra ${nombreUsuario}!`)
}
