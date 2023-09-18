
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
const carrito = [];


let nombreUsuario;
let nombreProducto;
let nombreModelo;
let talle;
let cantidad;
let color;
let total = 0;
let continuar;
let domicilio;
let detalleProductos = 'Producto        Talle       Color        Cantidad       Precio     Subtotal \n';
let detalle;
let tipoRetiro;


function validacionCantidad(unidades) {
    while (unidades <= 0 || unidades == ``) {
        unidades = prompt(`La cantidad de productos no es válida.\nPor favor vuelva a ingresar cuántos productos quiere agregar:`);
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
    nombreProducto = validacionTexto(nombreProducto.toLowerCase());
    //hecho con switch

    switch (nombreProducto) {
        case REMERA:
            nombreModelo = prompt(`A continuacion te mostramos las opciones que tenemos de remeras en stock\n
            ${RemerasArt[0].nombre} $${RemerasArt[0].precio}\n
            ${RemerasCarrie[0].nombre} $${RemerasCarrie[0].precio}\n
            ${RemerasChucky[0].nombre} $${RemerasChucky[0].precio}\n
            ${RemerasIt[0].nombre} $${RemerasIt[0].precio}\n
            Ingresa el modelo que quieras de entre estas opciones: Art / Carrie / Chucky / It \n
            A continuacion podras elegir talle y color.`)

            switch (nombreModelo) {
                case ART:
                    let talle = prompt(`Perfecto! Dentro de las remeras de ${RemerasArt[0].modelo} tenemos para ofrecerte
                    Talle:\n ${RemerasArt[0].talle} / ${RemerasArt[2].talle} / ${RemerasArt[4].talle} \n Ingresá la letra del talle elegido`);
                    let color = prompt(`Genial, enviaremos el talle ${talle}. Es momento de elegir el color de tu remera!\n ${RemerasArt[0].color} / ${RemerasArt[2].color}\n Ingresá el color que deseas agregar al carrito`);
                    cantidad = +prompt(`Cuántas remeras de ${nombreModelo}, color ${color}, talle ${talle} deseas agregar al carrito?`); //podria ser una function creo, una vez resuelto tema carrito puedo subirla, porque se va a repetir para buzos y para todos los modelos

                    //PRUEBA CON FIND
                    const itemElegido = RemerasArt.find((item) => {
                        return item.modelo === nombreModelo.toLowerCase() && item.talle === talle.toLowerCase() && item.color === color.toLowerCase()
                    });
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
                        carrito.push(carrito + itemCarrito);

                        alert(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
                    } else {
                        alert("El producto seleccionado no existe en el catálogo.");
                    }
                    break;
                case CARRIE:
                    let talleCarrie = prompt(`Perfecto! Dentro de las remeras de ${RemerasCarrie[0].modelo} tenemos para ofrecerte
                    Talle:\n ${RemerasCarrie[0].talle} / ${RemerasCarrie[2].talle} / ${RemerasCarrie[4].talle} \n Ingresá la letra del talle elegido`);
                    let colorCarrie = prompt(`Genial, enviaremos el talle ${talle}. Es momento de elegir el color de tu remera!\n ${RemerasCarrie[0].color} / ${RemerasCarrie[2].color}\n Ingresá el color que deseas agregar al carrito`);
                    cantidad = +prompt(`Cuántas remeras de ${nombreModelo}, color ${colorCarrie}, talle ${talleCarrie} deseas agregar al carrito?`);
                    itemElegido = RemerasCarrie.find((remera) => {
                        return remera.modelo === nombreModelo.toLowerCase() && remera.talle === talleCarrie.toLowerCase() && remera.color === colorCarrie.toLowerCase()
                    });
                    if (itemElegido) {
                        const itemCarrito = {
                            nombre: itemElegido.nombre,
                            talle: talleCarrie,
                            color: colorCarrie,
                            cantidad: cantidad,
                            precioUnitario: itemElegido.precio,
                            subtotal: cantidad * itemElegido.precio
                        };

                        // Agregar el producto al carrito
                        carrito.push(carrito + itemCarrito);

                        alert(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
                    } else {
                        alert("El producto seleccionado no existe en el catálogo.");
                    }
                    break;
                case CHUCKY:
                    talle = prompt(`Perfecto! Dentro de las remeras de ${RemerasChucky[0].modelo} tenemos para ofrecerte
                    Talle:\n ${RemerasChucky[0].talle} / ${RemerasChucky[2].talle} / ${RemerasChucky[4].talle} \n Ingresá la letra del talle elegido`);
                    color = prompt(`Genial, enviaremos el talle ${talle}. Es momento de elegir el color de tu remera!\n ${RemerasChucky[0].color} / ${RemerasChucky[2].color}\n Ingresá el color que deseas agregar al carrito`);
                    cantidad = +prompt(`Cuántas remeras de ${nombreModelo}, color ${color}, talle ${talle} deseas agregar al carrito?`);
                    itemElegido = RemerasChucky.find((remera) => {
                        return remera.modelo === nombreModelo.toLowerCase() && remera.talle === talle.toLowerCase() && remera.color === color.toLowerCase()
                    });
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
                        carrito.push(carrito + itemCarrito);

                        alert(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
                    } else {
                        alert("El producto seleccionado no existe en el catálogo.");
                    }
                    break;
                case IT:
                    talle = prompt(`Perfecto! Dentro de las remeras de ${RemerasIt[0].modelo} tenemos para ofrecerte Talle:\n ${RemerasIt[0].talle} / ${RemerasIt[3].talle} / ${RemerasIt[6].talle} \n Ingresá la letra del talle elegido`);
                    color = prompt(`Genial, enviaremos el talle ${talle}. Es momento de elegir el color de tu remera!\n ${RemerasIt[0].color} / ${RemerasIt[1].color} / ${RemerasIt[2].color}\n Ingresá el color que deseas agregar al carrito`);
                    cantidad = +prompt(`Cuántas remeras de ${nombreModelo}, color ${color}, talle ${talle} deseas agregar al carrito?`);
                    itemElegido = RemerasIt.find((remera) => {
                        return remera.modelo === nombreModelo.toLowerCase() && remera.talle === talle.toLowerCase() && remera.color === color.toLowerCase()
                    });
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
                        carrito.push(carrito + itemCarrito);

                        alert(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
                    } else {
                        alert("El producto seleccionado no existe en el catálogo.");
                    }
                    break;
                default:
                    alert('El producto ingresado no existe, por favor vuelva a ingresar una opción válida.')
            }
        case BUZO:
            prompt(`A continuacion te mostramos las opciones que tenemos de buzos en stock"\n
            ${BuzoArt[0].nombre} $${BuzoArt[0].precio}\n
            ${BuzosCarrie[1].nombre} $${BuzosCarrie[1].precio}\n
            ${BuzosChucky[2].nombre} $${BuzosChucky[2].precio}\n
            ${BuzosAsesinos[3].nombre} $${BuzosAsesinos[3].precio}\n
            Ingresa el modelo que quieras de entre estas opciones: Art / Asesinos / Carrie / Chucky\n
            A continuacion podras elegir talle y color.`);

            switch (nombreModelo) {
                case ART:
                    let talle = prompt(`Perfecto! Dentro de las remeras de ${BuzoArt[0].modelo} tenemos para ofrecerte
                    Talle:\n ${BuzoArt[0].talle} / ${BuzoArt[2].talle} / ${BuzoArt[4].talle} \n Ingresá la letra del talle elegido`);
                    let color = prompt(`Genial, enviaremos el talle ${talle}. Es momento de elegir el color de tu remera!\n ${BuzoArt[0].color} / ${BuzoArt[2].color}\n Ingresá el color que deseas agregar al carrito`);
                    cantidad = +prompt(`Cuántas remeras de ${nombreModelo}, color ${color}, talle ${talle} deseas agregar al carrito?`); //podria ser una function creo, una vez resuelto tema carrito puedo subirla, porque se va a repetir para buzos y para todos los modelos

                    //PRUEBA CON FIND
                    const itemElegido = BuzoArt.find((item) => {
                        return item.modelo === nombreModelo.toLowerCase() && item.talle === talle.toLowerCase() && item.color === color.toLowerCase()
                    });
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
                        carrito.push(carrito + itemCarrito);

                        alert(`Agregaste al carrito: Producto: ${itemCarrito.nombre}, Talla: ${talle}, Color: ${color}, Cantidad: ${cantidad}`);
                    } else {
                        alert("El producto seleccionado no existe en el catálogo.");
                    }
                    break;
                case CARRIE:
                    break;
                case CHUCKY:
                    break;
                case ASESINOS:
                    break;
                default:
                    alert('El producto ingresado no existe, por favor vuelva a ingresar una opción válida.')
            }
    };
    continuar = prompt(`Desea seguir agregando productos al carrito?\nsi/no`);
    continuar = validacionSiNo(continuar);
} while (continuar === SI);
console.log(carrito);





//         case TAZA:
// nombreModelo = prompt(`A continuacion te mostramos las opciones que tenemos de tazas en stock\n
//             ${Tazas[0].nombre} $${Tazas[0].precio}\n
//             ${Tazas[1].nombre} $${Tazas[1].precio}\n
//             ${Tazas[2].nombre} $${Tazas[2].precio}\n
//             ${Tazas[3].nombre} $${Tazas[3].precio}\n
//             Ingresa el modelo que quieras de entre estas opciones: Art / Freddy / Chucky / Carrie`)

// break;

//         case POSTER:
// prompt(`A continuacion te mostramos las opciones que tenemos de posters en stock"\n
//             ${PosterArt.nombre} $${PosterArt.precio}\n
//             ${PosterCarrie.nombre} $${PosterCarrie.precio}\n
//             ${PosterChucky.nombre} $${PosterChucky.precio}\n
//             ${PosterFreddy.nombre} $${PosterFreddy.precio}\n
//             Ingresa el modelo que quieras de entre estas opciones: Art / Carrie / Chucky / Freddy`)
// break;

//         case STICKER:
// break;

//         default:

//     }
// }



// while (continuar == SI);


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
