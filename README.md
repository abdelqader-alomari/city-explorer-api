# City Explorer

**Author**: Abdelqader Al-Omari
**Version**: 1.0.3

## Overview

This app which is work on both of front end and back end. to obtain (by enter city name)data for location(city name, longitude, and latitude), map, weather (for 16 days) and movies (up to 20).

## Getting Started

- Install express, cors, dotenv. by node package manager (npm)

- Set up a new server.
  1- touch server.js
  2- npm init -y
  3- npm i express
  4- require the express framework
  5- const server = express();
  6- declare a PORT variable
  7- listen method
  8- create a route

- Connect Backend to API server using API key to get the data and use axios

- Map through the data and make Class to get desired data

- Compose a url to request data from back-end to front-end use cors

- Send the data to front-end. then display the results(React).

- Handle errors using try/catch.

- Save searched data in memory in order to speed up the process and decrease number of hit API

## Architecture

Latest edit to this image, is when user enter city name and send request to API to get data, after that it saves in memory so when entered same city name later, it takes data from memory.

![city-explorer-api](https://i.ibb.co/sKSbr56/WRRC.png)

Libraries - React, bootstrap, Axios, Node.js, Express.js
Origin languages - HTML, CSS, JavaScript
Tools - GitHub, Netlify, Heroku, Trello, Creatly(block diagrams),
API : LocationIQ, themoviedb, weatherbit

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

I make a graph and discuss for first 15-30 minutes with:

- Marah Musleh (day 2,4)
- Osaid Alhomedy (day 1)
- Mohammad Al-Khalil (day 3)

## Time Estimates

- Around 2 hours to review the lecture and solve lab 10 and test the backend
- Within 45 minutes to check frontend to have a clear log and push the website and test it
- Within 30 minutes to update readme.
