
let nombreUsuario;
let nombreProducto;
let continuar;
let cantidad;
let detalleProductos = 'Producto       Cantidad       PrecioU     Subtotal \n';
let detalle;
let tipoRetiro;
let domicilio;


const SI = 'si';
const NO = 'no';
const RETIRO = `retiro`;
const ENVIO = `envio`;

function validacionTexto(entrada) {
    while (entrada == ``) {
        entrada = prompt(`Respuesta inválida, no se permiten campos vacios. Vuelva a ingresar el dato por favor`)
    }
    return entrada;
}

function validacionCantidad(unidades) {
    while (unidades <= 0 || unidades == undefined || isNaN (unidades)) {
        unidades = parseInt (prompt(`La cantidad de productos no es válida.\nPor favor vuelva a ingresar cuántos productos quiere agregar al carrito:`));
    }
    return unidades;
}

function validacionSiNo(respuesta) {
    while (respuesta !== SI && respuesta !== NO) {
        respuesta = prompt(`Respuesta invalida, por favor vuelva a ingresar su respuesta\nsi/no: `)
    }
    return respuesta;
}

function validacionEnvio(entrega) {
    while (entrega !== ENVIO && entrega !== RETIRO) {
        entrega = prompt(`Respuesta inválida, por favor vuelva a ingresar su respuesta\nretiro/envio`)
    }
    return entrega;
}
const carrito = [];


//empieza pag
nombreUsuario = prompt(`Bienvenidos a FDS Shop!\nPor favor, ingrese su nombre para personalizar su pedido:`);
nombreUsuario = validacionTexto(nombreUsuario);

do {
    const listaString = Tazas.map((producto, index) =>
    `${index + 1} - ${producto.nombre} $${producto.precio}`);

    nombreProducto = parseInt(prompt (`Bienvenido/a ${nombreUsuario.toUpperCase()}!\n
    Que modelo de taza desea sumar al carrito? Ingrese el numero de la opcion elegida:\n
    ${ listaString.join ('\n')}`));

    function validacionProducto(unidades) {
        while (unidades <= 0 || unidades > Tazas.length || unidades== undefined || isNaN (unidades)) {
            unidades = parseInt (prompt(`Recuerde escribir el número correspondiente al producto elegido\n
            ${ listaString.join ('\n')}`));
        }
        return unidades;
    }

    nombreProducto= validacionProducto (nombreProducto);

    cantidad = parseInt(prompt('Ingrese la cantidad que desea:'));
    cantidad = validacionCantidad (cantidad);
    
    carrito.push(new Item(Tazas[nombreProducto-1], cantidad));

    alert (`Agregaste a tu carrito ${Tazas [nombreProducto-1].nombre} - ${cantidad} unidad/es - A valor unitario de ${Tazas [nombreProducto-1].precio} Subtotal $${Tazas[nombreProducto-1].precio*cantidad}`);

    detalle = `${Tazas [nombreProducto-1].nombre}         ${cantidad}             ${Tazas [nombreProducto-1].precio}               ${Tazas[nombreProducto-1].precio*cantidad}\n`;
    detalleProductos = detalleProductos + detalle;
    continuar = prompt('Desea salir? si/no');
    validacionSiNo (continuar.toLowerCase);
    }
while (continuar != 'si');

const total = carrito.reduce((acumulador, item) => acumulador + (item.producto.precio * item.cantidad), 0);

alert(`${detalleProductos}\nEl total a pagar de su compra es de: $${total}`);

tipoRetiro = prompt(`Quiere retirar su pedido por sucursal o recibirlo en su domicilio?\nIngrese la opción elegida: retiro/envio`);
tipoRetiro= validacionEnvio(tipoRetiro.toLowerCase);
if (tipoRetiro == ENVIO) {
    tipoRetiro = alert(`Perfecto! A continuacion podrá ingresar el domicilio donde quiere recibir sus productos. Recuerde que el envío se paga al recibirlo y tiene una tardanza de aprox 5 días habiles`);
    domicilio = prompt(`Por favor ingresá el domicilio donde quiere recibir su pedido:\nCalle XXX, Localidad, cualquier dato de relevancia que considere mencionar`);
    domicilio= validacionTexto(domicilio);
    alert(`${detalleProductos}\nLo recibirá en los próximos 7 dias hábiles en su domicilio de la calle ${domicilio}\nAgradecemos mucho su compra ${nombreUsuario.toUpperCase()}!`);
} else {
    alert(`${detalleProductos}\nTu pedido estará disponible para retiro en los proximos 7 dias en nuestra sucursal ubicada en Av Corrientes 5485 de lunes a viernes de 9 a 18hrs\nAgradecemos mucho su compra ${nombreUsuario.toUpperCase()}!`)
}
