'use strict';
require('dotenv').config();
const superagent = require('superagent');
const apiKey = process.env.RESTAURANT_API_KEY;

let restaurantsMemory = {};

function Restaurant(rest) {
    this.name = rest.name;
    this.image_url = rest.image_url;
    this.price = rest.price;
    this.rating = rest.rating;
    this.url = rest.url;
}
Restaurant.all;


function restaurant(req, res) {
    let { cityName } = req.query;
    if (restaurantsMemory[cityName] !== undefined) {
        console.log('Restaurant data from the memory')
        res.send(restaurantsMemory[cityName]);
    }
    else {
        const url = `https://api.yelp.com/v3/businesses/search?location=${cityName}`;
        superagent.get(url)
            .set('Authorization', `Bearer ${apiKey}`)
            .then(resp => {
                Restaurant.all = resp.body.businesses.map((val) => {
                    return new Restaurant(val);
                })
                console.log('Restaurant data from the API')
                restaurantsMemory[cityName] = Restaurant.all;
                res.status(200).json(Restaurant.all);
            })
    }
}
module.exports = restaurant;
