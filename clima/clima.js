const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=469d3d17b8d1d5209e48141a8e90d5f4&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}