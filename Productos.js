// Crear varias instancias del producto con distintas variantes
const Remeras= [];
Remeras.push (new Producto('Remera Art', 3000, ['s','m','l'],'art', ['negra', 'blanca']));
Remeras.push (new Producto('Remera Carrie', 3000, ['s','m','l'], 'carrie', ['negro', 'blanca']));
Remeras.push (new Producto('Remera Chucky', 3000, ['s','m','l'], 'chucky', ['negro', 'blanca']));
Remeras.push (new Producto('Remera It', 3000, ['s','m','l'], 'it', ['blanca', 'negra', 'gris']));

const Buzos= [];
Buzos.push (new Producto('Buzo Art', 6000, ['S', 'M', 'L'], 'art', ['blanca', 'negra', 'gris']));
Buzos.push (new Producto('Buzo Carrie', 6000, ['S', 'M', 'L'], 'carrie', ['blanca', 'negra']));
Buzos.push (new Producto('Buzo Chucky', 6000, ['S', 'M', 'L'], 'chucky', ['blanca', 'negra', 'gris']));
Buzos.push (new Producto('Buzo Asesinos/Friends', 6000, ['S', 'M', 'L'], 'asesinos', ['blanca', 'gris']));

const Tazas=[];
Tazas.push (new Producto ('Taza Art', 2000));
Tazas.push (new Producto ('Taza Freddy', 2000));
Tazas.push (new Producto ('Taza It', 2000));
Tazas.push (new Producto ('Taza Asesinos', 2000));

//Stickers
const StickerArt = new Producto ('Taza Art', 500);
const StickerFreddy = new Producto ('Taza Freddy', 500);
const StickerChucky = new Producto ('Taza Chucky', 500);
const StickerCarrie = new Producto ('Taza Carrie', 500);

//Posters
const PosterChucky = new Producto ('Poster Chucky', 1000);
const PosterFreddy = new Producto ('Poster Freddy', 1000);
const PosterArt = new Producto ('Poster Art', 1000);
const PosterCarrie = new Producto ('Poster Carrie', 1000);


//Remeras It
// const RemeraItBlancaS = new Producto ('Remera It', 3000, 'S', 'It', 'blanca');
// const RemeraItBlancaM = new Producto ('Remera It', 3000, 'M', 'It', 'blanca');
// const RemeraItBlancaL = new Producto ('Remera It', 3000, 'L', 'It', 'blanca');

// const RemeraItNegraS = new Producto ('Remera It', 3000, 'S', 'It', 'negra');
// const RemeraItNegraM = new Producto ('Remera It', 3000, 'M', 'It', 'negra');
// const RemeraItNegraL = new Producto ('Remera It', 3000, 'L', 'It', 'negra');

// const RemeraItGrisS = new Producto ('Remera It', 3000, 'S', 'It', 'gris');
// const RemeraItGrisM = new Producto ('Remera It', 3000, 'M', 'It', 'gris');
// const RemeraItGrisL = new Producto ('Remera It', 3000, 'L', 'It', 'gris');
// //Remeras Chucky
// const RemeraChukyBlancaS = new Producto ('Remera Chucky', 3000, 'S', 'Chucky', 'blanca');
// const RemeraChukyBlancaM = new Producto ('Remera Chucky', 3000, 'M', 'Chucky', 'blanca');
// const RemeraChukyBlancaL = new Producto ('Remera Chucky', 3000, 'L', 'Chucky', 'blanca');

// const RemeraChukyNegraS = new Producto ('Remera Chucky', 3000, 'S', 'Chucky', 'negra');
// const RemeraChukyNegraM = new Producto ('Remera Chucky', 3000, 'M', 'Chucky', 'negra');
// const RemeraChukyNegraL = new Producto ('Remera Chucky', 3000, 'L', 'Chucky', 'negra');
// //Remeras Carrie
// const RemeraCarrieSBlanca = new Producto ('Remera Carrie', 3000, 'S', 'Carrie', 'blanca');
// const RemeraCarrieMBlanca = new Producto ('Remera Carrie', 3000, 'M', 'Carrie', 'blanca');
// const RemeraCarrieLBlanca = new Producto ('Remera Carrie', 3000, 'L', 'Carrie', 'blanca');

// const RemeraCarrieSNegra = new Producto ('Remera Carrie', 3000, 'S', 'Carrie', 'negra');
// const RemeraCarrieMNegra = new Producto ('Remera Carrie', 3000, 'M', 'Carrie', 'negra');
// const RemeraCarrieLNegra = new Producto ('Remera Carrie', 3000, 'L', 'Carrie', 'negra');
// //Remeras Art-Terrifier
// const RemeraArtSBlanca = new Producto ('Remera Terrifier', 3000, 'S',  'Terrifier', 'blanca');
// const RemeraArtMBlanca = new Producto ('Remera Terrifier', 3000, 'M',  'Terrifier', 'blanca');
// const RemeraArtLBlanca = new Producto ('Remera Terrifier', 3000, 'L',  'Terrifier', 'blanca');

// const RemeraArtSNegra = new Producto ('Remera Terrifier', 3000, 'S',  'Terrifier', 'negra');
// const RemeraArtMNegra = new Producto ('Remera Terrifier', 3000, 'M',  'Terrifier', 'negra');
// const RemeraArtLNegra = new Producto ('Remera Terrifier', 3000, 'L',  'Terrifier', 'negra');

// //Buzos Art
// const BuzosArtSBlanco = new Producto ('Buzo Terrifier', 6000, 'S',  'Terrifier', 'blanca');
// const BuzosArtMBlanco = new Producto ('Buzo Terrifier', 6000, 'M',  'Terrifier', 'blanca');
// const BuzosArtLBlanco = new Producto ('Buzo Terrifier', 6000, 'L',  'Terrifier', 'blanca');

// const BuzosArtSNegra = new Producto ('Buzo Terrifier', 6000, 'S',  'Terrifier', 'negra');
// const BuzosArtMNegra = new Producto ('Buzo Terrifier', 6000, 'M',  'Terrifier', 'negra');
// const BuzosArtLNegra = new Producto ('Buzo Terrifier', 6000, 'L',  'Terrifier', 'negra');

// const BuzosArtSGris = new Producto ('Buzo Terrifier', 6000, 'S',  'Terrifier', 'gris');
// const BuzosArtMGris = new Producto ('Buzo Terrifier', 6000, 'M',  'Terrifier', 'gris');
// const BuzosArtLGris = new Producto ('Buzo Terrifier', 6000, 'L',  'Terrifier', 'gris');

// //Buzos Carrie
// const BuzosCarrieSBlanco = new Producto ('Buzo Carrie', 6000, 'S',  'Carrie', 'blanca');
// const BuzosCarrieMBlanco = new Producto ('Buzo Carrie', 6000, 'M',  'Carrie', 'blanca');
// const BuzosCarrieLBlanco = new Producto ('Buzo Carrie', 6000, 'L',  'Carrie', 'blanca');

// const BuzosCarrieSNegra = new Producto ('Buzo Carrie', 6000, 'S',  'Carrie', 'negra');
// const BuzosCarrieMNegra = new Producto ('Buzo Carrie', 6000, 'M',  'Carrie', 'negra');
// const BuzosCarrieLNegra = new Producto ('Buzo Carrie', 6000, 'L',  'Carrie', 'negra');

// //Buzos Chucky
// const BuzosChuckySBlanco = new Producto ('Buzo Chucky', 6000, 'S',  'Chucky', 'blanca');
// const BuzosChuckyMBlanco = new Producto ('Buzo Chucky', 6000, 'M',  'Chucky', 'blanca');
// const BuzosChuckyLBlanco = new Producto ('Buzo Chucky', 6000, 'L',  'Chucky', 'blanca');

// const BuzosChuckySNegra = new Producto ('Buzo Chucky', 6000, 'S',  'Chucky', 'negra');
// const BuzosChuckyMNegra = new Producto ('Buzo Chucky', 6000, 'M',  'Chucky', 'negra');
// const BuzosChuckyLNegra = new Producto ('Buzo Chucky', 6000, 'L',  'Chucky', 'negra');

// const BuzosChuckySGris = new Producto ('Buzo Chucky', 6000, 'S',  'Chucky', 'gris');
// const BuzosChuckyMGris = new Producto ('Buzo Chucky', 6000, 'M',  'Chucky', 'gris');
// const BuzosChuckyLGris = new Producto ('Buzo Chucky', 6000, 'L',  'Chucky', 'gris');

// //Asesinos Friends
// const BuzosAsesinosSGris = new Producto ('Buzo Asesinos', 6000, 'S',  'Asesinos', 'gris');
// const BuzosAsesinosMGris = new Producto ('Buzo Asesinos', 6000, 'M',  'Asesinos', 'gris');
// const BuzosAsesinosLGris = new Producto ('Buzo Asesinos', 6000, 'L',  'Asesinos', 'gris');

// const BuzosAsesinosSBlanca = new Producto ('Buzo Asesinos', 6000, 'S',  'Asesinos', 'blanca');
// const BuzosAsesinosMBlanca = new Producto ('Buzo Asesinos', 6000, 'M',  'Asesinos', 'blanca');
// const BuzosAsesinosLBlanca = new Producto ('Buzo Asesinos', 6000, 'L',  'Asesinos', 'blanca');

