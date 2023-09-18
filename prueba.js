const itemElegido = RemerasArt.find((remera) => {
    return remera.modelo === nombreModelo.toLowerCase() && remera.talle === talle.toLowerCase() && remera.color === color.toLowerCase()
});

function buscarProducto (categoria){
    const itemElegido = categoria.find((item) => {
        return item.modelo === nombreModelo.toLowerCase() && item.talle === talle.toLowerCase() && item.color === color.toLowerCase()
    });
}