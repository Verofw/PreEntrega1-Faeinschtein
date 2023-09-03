

// puedo generar funciones para agregar producto en vez de la funcion para hacer la cuenta, que es medio al pedo me dijo la profe
//tambien para hacer la validacion tanto de precio >= 0 y de cantidad >0
//agregar que en el alert final se puede poner un subtotal con los nomnbres de los productos. 
//puedo agregar al ppio el nombre del usuario para mencionarlo despues en el alert final


///AGREGAR A FUNCION PARA QUE A FINAL SE UTIICE EL NOMBRE DEL PROD, Y SE MUESTRE UN SUBTOTAL
/// puedo agregar consulta de domicilio para completar el cierre,
/// incuso si quiere envio a domicilio o retirar por sucursal y generar dos caminos en el cierre con un while FALTARIA ESO 

const SI = 'si';
const NO = 'no';
let cantidad;
let nombreUsuario;
let precio;
let nombreProducto;
let total = 0;
let continuar;
let domicilio;
let detalleProductos= 'Producto    Cantidad       Precio     Subtotal \n';
let detalle;


function validacionCantidad(unidades) {
    while (unidades <= 0) {
        unidades = prompt(`Ingrese una cantidad válida de productos`);
    }
    return unidades;
}

function validacionPrecio(valor) {
    while (valor < 0) {
        valor = prompt(`El costo ingresado no es válido, por favor ingrese un numero mayor o igual a 0`);
    }
    return valor;
}

function validacionSiNo(respuesta) {
    while (respuesta != SI && respuesta != NO) {
        respuesta = prompt('Solamente puede ingresar si o no, \n Quiere seguir agregando productos al carrito?');
        return respuesta;
    }
}

nombreUsuario = prompt(`Bienvenidos a FDS Shop! Por favor, ingresá tu nombre para personalizar tu pedido:`);
do {
    nombreProducto = prompt(`Bienvenido/a ${nombreUsuario}! Qué producto querés agregar al carrito?`);
    cantidad = +prompt(`Cuántas unidades querés cargar?\nPor favor ingrese la cantidad en numeros`);
    validacionCantidad(cantidad);
    precio = +prompt(`Ingrese precio de producto $`);
    validacionPrecio(precio);
    total = total + precio * cantidad;
    continuar = prompt(`Desea seguir agregando productos al carrito?`);
    validacionSiNo(continuar);
    detalle= `${nombreProducto}         ${cantidad}             ${precio}               ${precio*cantidad}\n`;
    detalleProductos= detalleProductos + detalle;

} while (continuar == SI);

detalleProductos= detalleProductos + `Total: $${total}`

domicilio = prompt(`Por favor ingresá el domicilio donde quéres recibir tu pedido:\nCalle XXX, localidad, cualquier dato de relevancia que consideres mencionar`);

alert(`El precio total de tu pedido es de\n${detalleProductos}\nLo recibiras en los próximos 7 dias hábiles en tu domicilio de la calle ${domicilio}\nAgradecemos tu compra ${nombreUsuario}!`);
