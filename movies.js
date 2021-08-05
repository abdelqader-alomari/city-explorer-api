'use strict';

const axios = require('axios');
let moviesMemory = {};

class Movie {
    constructor(movie) {
        this.title = movie.title
        this.overview = movie.overview
        this.vote_average = movie.vote_average
        this.vote_count = movie.vote_count
        this.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        this.popularity = movie.popularity
        this.release_date = movie.release_date
    }
}

async function movies(req, res) {
    let moviesArr = [];
    let { cityName } = req.query;
    if (moviesMemory[cityName] !== undefined) {
        console.log('Movies data from the memory')
        res.send(moviesMemory[cityName]);
    }
    else {
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${cityName}`;

        try {
            let axiosMovies = await axios.get(URL)
            axiosMovies.data.results.map(item => moviesArr.push(new Movie(item)));
            console.log('Movies data from the API')
            moviesMemory[cityName] = moviesArr;
            res.status(200).send(moviesArr);
        }
        catch (error) {
            res.status(400)
            if (error.status) res.status(error.status).send(error.message)
        }
    }
}


module.exports = movies