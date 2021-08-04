'use strict'

const express = require('express');
const server = express();

require('dotenv').config();
const PORT = process.env.PORT

const cors = require('cors');
server.use(cors());

const movies = require('./movies')
const weather = require('./weather')



server.get('/', (req, res) => { res.send('Hello from main route'); });

server.get('/weather', weather)
server.get('/movies', movies)


server.listen(PORT, () => console.log(`listening on ${PORT}`));
