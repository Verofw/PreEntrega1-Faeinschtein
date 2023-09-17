///La lista de productos ahora esta definida
// sospecho que voy a tener que hacer otras clases para las tazas, stickers y poster


const SI = 'si';
const NO = 'no';
const RETIRO = `retiro`;
const ENVIO = `envio`;
const REMERA = 'remera';
const BUZO = 'buzo';
const TAZA = 'taza';
const POSTER = 'poster';
const STICKER = 'sticker';
const CARRIE = 'carrie';
const ART = 'art';
const CHUCKY = 'chucky';
const IT = 'it';
const FREDDY = 'freddy';
const ASESINOS = 'asesinos';
const S = 's';
const M = 'm';
const L = 'l';
const BLANCO = 'blanco';
const NEGRO = 'negro';
const GRIS = 'gris';


let nombreUsuario;
let talle;
let cantidad;
let color;
let nombreProducto;
let nombreModelo;
let total = 0;
let continuar;
let domicilio;
let detalleProductos = 'Producto    Cantidad       Precio     Subtotal \n';
let detalle;
let tipoRetiro;

function validacionCantidad(unidades) {
    while (unidades <= 0 || unidades == ``) {
        unidades = prompt(`La cantidad de productos no es válida.\nPor favor vuelva a ingresar cuántos productos quiere agregar:`);
    }
    return unidades;
}

function validacionPrecio(valor) {
    while (valor <= 0 || valor == ``) {
        valor = prompt(`El costo ingresado no es válido, por favor ingrese un número mayor 0`);
    }
    return valor;
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

function validacionTexto(entrada) {
    while (entrada == ``) {
        entrada = prompt(`Respuesta inválida, no se permiten campos vacios`)
    }
    return entrada;
}


//EMPIEZA LA PAG
nombreUsuario = prompt(`Bienvenidos a FDS Shop!\nPor favor, ingrese su nombre para personalizar su pedido:`);
nombreUsuario = validacionTexto(nombreUsuario);
do {
    nombreProducto = prompt(`Bienvenido/a ${nombreUsuario}! A que categoría querés ingresar?\n
    Remera/Buzo/Taza/Sticker/Poster`);
    nombreProducto = validacionTexto(nombreProducto);
    //ver si aplica el .toLowerCase, probar}
    //hecho con switch

    switch (nombreProducto) {
        case REMERA:
            let nombreModelo = prompt(`A continuacion te mostramos las opciones que tenemos de remeras en stock\n
            ${Remeras[0].nombre} $${Remeras[0].precio}\n
            ${Remeras[1].nombre} $${Remeras[1].precio}\n
            ${Remeras[2].nombre} $${Remeras[2].precio}\n
            ${Remeras[3].nombre} $${Remeras[3].precio}\n
            Ingresa el modelo que quieras de entre estas opciones: It / Chucky / Carrie / Art\n
            A continuacion podras elegir talle y color.`)
            
            switch (nombreModelo) {
                case ART:
                    let talle = prompt(`Perfecto! Dentro de las remeras de ${Remeras[0].modelo} tenemos para ofrecerte
                    Talle:\n ${Remeras[0].talle}\n Ingresá la letra del talle elegido`);
                    let color = prompt(`Genial, enviaremos el talle ${talle}. Es momento de elegir el color de tu remera!\n ${Remeras[0].color}\n Ingresá el color que deseas agregar al carrito`);
                    let cantidad = +prompt(`Cuántas remeras de ${Remeras[0].modelo}, color ${color}, talle ${talle} deseas agregar al carrito?`); //podria ser una function creo, una vez resuelto tema carrito puedo subirla, porque se va a repetir para buzos y para todos los modelos

                    //PRUEBA CON FIND

                    const itemElegido = Remeras.find((remera) => {
                        return remera.modelo === nombreModelo.toLowerCase() && remera.talle === talle.toLowerCase() && remera.color === color.toLowerCase()
                    });
    ////que es lo que esta mal en este find????? 
                    if (itemElegido) {
                        const itemCarrito = {
                            nombre: itemElegido.nombre,
                            talle: talle,
                            color: color,
                            cantidad: cantidad,
                            precioUnitario: itemElegido.precio,
                            subtotal: cantidad * itemElegido.precio
                        };
                
                        // Agregar el producto al carrito
                        carrito.push(itemCarrito);
                
                        console.log(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
                    } else {
                        console.log("El producto seleccionado no existe en el catálogo.");
                    }
                
                //     // agregarAlCarrito(item1, cantidad);
            }


            break;
        case BUZO:
            prompt(`A continuacion te mostramos las opciones que tenemos de buzos en stock"\n
            ${BuzosArt.nombre} $${BuzosArt.precio}\n
            ${BuzosAsesinos.nombre} $${BuzosAsesinos.precio}\n
            ${BuzosCarrie.nombre} $${BuzosCarrie.precio}\n
            ${BuzosChucky.nombre} $${BuzosChucky.precio}\n
            Ingresa el modelo que quieras de entre estas opciones: Art / Asesinos / Carrie / Chucky\n
            A continuacion podras elegir talle y color.`)

            break;

        case TAZA:
            prompt(`A continuacion te mostramos las opciones que tenemos de tazas en stock"\n
            ${TazasArt.nombre} $${TazasArt.precio}\n
            ${TazasAsesinos.nombre} $${TazasAsesinos.precio}\n
            ${TazasFreddy.nombre} $${TazasFreddy.precio}\n
            ${TazasIt.nombre} $${TazasIt.precio}\n
            Ingresa el modelo que quieras de entre estas opciones: Art / Asesinos / Freddy / It`)
            break;

        case POSTER:
            prompt(`A continuacion te mostramos las opciones que tenemos de posters en stock"\n
            ${PosterArt.nombre} $${PosterArt.precio}\n
            ${PosterCarrie.nombre} $${PosterCarrie.precio}\n
            ${PosterChucky.nombre} $${PosterChucky.precio}\n
            ${PosterFreddy.nombre} $${PosterFreddy.precio}\n
            Ingresa el modelo que quieras de entre estas opciones: Art / Carrie / Chucky / Freddy`)
            break;

        case STICKER:
            break;

        default:

    }
}



while (continuar == SI);


// do {
//     nombreProducto = prompt(`Bienvenido/a ${nombreUsuario}! Qué producto quiere agregar al carrito?`);
//     nombreProducto= validacionTexto(nombreProducto);
//     cantidad = +prompt(`Cuántas unidades quiere cargar?\nPor favor ingrese la cantidad en numeros`);
//     cantidad = validacionCantidad(cantidad);
//     precio = +prompt(`Ingrese precio de producto $`);
//     precio = validacionPrecio(precio);
//     total = total + precio * cantidad;
//     continuar = prompt(`Desea seguir agregando productos al carrito?\nsi/no`);
//     continuar = validacionSiNo(continuar);
//     detalle = `${nombreProducto}         ${cantidad}             ${precio}               ${precio * cantidad}\n`;
//     detalleProductos = detalleProductos + detalle;

// } while (continuar == SI);

// detalleProductos = detalleProductos + `Total: $${total}`

// tipoRetiro = prompt(`Quiere retirar su pedido por sucursal o recibirlo en su domicilio?\nIngrese la opción elegida: retiro/envio`);
// tipoRetiro= validacionEnvio(tipoRetiro);
// if (tipoRetiro == ENVIO) {
//     tipoRetiro = alert(`Perfecto! A continuacion podrá ingresar el domicilio donde quiere recibir sus productos. Recuerde que el envío se paga al recibirlo y tiene una tardanza de aprox 5 días habiles`);
//     domicilio = prompt(`Por favor ingresá el domicilio donde quiere recibir su pedido:\nCalle XXX, Localidad, cualquier dato de relevancia que considere mencionar`);
//     domicilio= validacionTexto(domicilio);
//     alert(`${detalleProductos}\nLo recibirá en los próximos 7 dias hábiles en su domicilio de la calle ${domicilio}\nAgradecemos mucho su compra ${nombreUsuario}!`);
// } else {
//     alert(`${detalleProductos}\nTu pedido estará disponible para retiro en los proximos 7 dias en nuestra sucursal ubicada en Av Corrientes 5485 de lunes a viernes de 9 a 18hrs\nAgradecemos mucho su compra ${nombreUsuario}!`)
// }
