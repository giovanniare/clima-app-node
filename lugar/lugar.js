const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=d07cbea5360805585e9b945072dc0d28`
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}