const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.71, -74.01)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}.`

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`
    }



    // await lugar.getLugarLatLng(direccion)
    //     .then(datos => {
    //         clima.getClima(datos.lat, datos.lng)
    //             .then(resp => console.log(`El clima de ${datos.direccion} es de ${resp}`))
    //             .catch(err => console.log(`No se pudo determinar el clima de ${datos.direccion}`));
    //     })
    //     .catch(err => console.log('Error!! ', err));
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log);