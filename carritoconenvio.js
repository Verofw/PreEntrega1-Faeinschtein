

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
        unidades = prompt(`La cantidad de productos no es válida.\nPor favor vuelva a ingresar cuántos productos quiere agregar:`);
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
        respuesta = prompt('Solamente puede ingresar si o no, \nQuiere seguir agregando productos al carrito?');
        return respuesta;
    }
}

nombreUsuario = prompt(`Bienvenidos a FDS Shop!\nPor favor, ingrese su nombre para personalizar su pedido:`);
do {
    nombreProducto = prompt(`Bienvenido/a ${nombreUsuario}! Qué producto quiere agregar al carrito?`);
    cantidad = +prompt(`Cuántas unidades quiere cargar?\nPor favor ingrese la cantidad en numeros`);
    cantidad= validacionCantidad(cantidad);
    precio = +prompt(`Ingrese precio de producto $`);
    precio= validacionPrecio(precio);
    total = total + precio * cantidad;
    continuar = prompt(`Desea seguir agregando productos al carrito?`);
    validacionSiNo(continuar);
    detalle= `${nombreProducto}         ${cantidad}             ${precio}               ${precio*cantidad}\n`;
    detalleProductos= detalleProductos + detalle;

} while (continuar == SI);

detalleProductos= detalleProductos + `Total: $${total}`

// domicilio = prompt(`Por favor ingresá el domicilio donde quéres recibir tu pedido:\nCalle XXX, localidad, cualquier dato de relevancia que consideres mencionar`);

// alert(`El precio total de tu pedido es de\n${detalleProductos}\nLo recibiras en los próximos 7 dias hábiles en tu domicilio de la calle ${domicilio}\nAgradecemos tu compra ${nombreUsuario}!`);


//queres envio a domicilio o retirar por la web
    //a) envio a domicilio => pido direccion y alert dice q envia a tal domicilio y ticket
    ///b) retiro en sucursal => directo alert que diga retiras en sucursal de tal direccion y ticket

    //una vez que sale del bucle compra

    let tipoRetiro;
    const RETIRO= `retiro`;
    const ENVIO= `envio`;

    tipoRetiro= prompt(`Quiere retirar su pedido por sucursal o recibirlo en su domicilio?\nIngrese la opción elegida: retiro/envio`);
    
    if (tipoRetiro== ENVIO){
        tipoRetiro= alert ( `Perfecto! A continuacion podrá ingresar el domicilio donde quiere recibir sus productos. Recuerde que el envío se paga al recibirlo y tiene una tardanza de aprox 5 días habiles`);
        domicilio = prompt(`Por favor ingresá el domicilio donde quiere recibir su pedido:\nCalle XXX, localidad, cualquier dato de relevancia que considere mencionar`);
        alert(`El precio total de su pedido es de\n${detalleProductos}\nLo recibira en los próximos 7 dias hábiles en su domicilio de la calle ${domicilio}\nAgradecemos su compra ${nombreUsuario}!`);
    }  else{
        alert (`El precio total de su pedido es de\n${detalleProductos}\nTu pedido estará disponible para retiro en los proximos 7 dias en nuestra sucursal ubicada en Av Corrientes 5485 de lunes a viernes de 9 a 18hrs\nAgradecemos su compra ${nombreUsuario}!`)
    }