'use strict'

const express = require('express');
const server = express();

const weatherData = require('./data/weather.json');

require('dotenv').config();
const PORT = process.env.PORT

const cors = require('cors');

class Forecast {
    constructor(day) {
        this.date = day.datetime;
        this.description = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}}`;
    }
}

server.get('/', (req, res) => {
    res.send('Hello from main route');
});
server.get('/weather', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    try {
        let { searchQuery, lat, lon } = req.query;
        let cityInfo = weatherData.find(element =>
            element.city_name.toLowerCase() === searchQuery.toLowerCase() ||
            (element.lat === lat && element.lon === lon) // to search by city or (lat+lon)
        );

        let forecastArr = cityInfo.data.map(info => new Forecast(info));
        console.log(forecastArr);
        res.send(forecastArr);
    }
    catch { res.status(404).send('There is no data to show for this destination'); }
});

server.listen(PORT, () => console.log(`listening on ${PORT}`));