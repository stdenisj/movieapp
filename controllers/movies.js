
const express = require('express');
const axios = require('axios');

const movieRouter = express.Router();

const key = require('./key');


movieRouter.get('/:movie', async(req, res) => {
  try {
    let title = req.params.movie;
    let response = await axios.get(`http://www.omdbapi.com/?t=${title}&type=movie&apikey=${key}`);
    res.send(response.data);
  }
  catch (e) {
    console.log(e);
  }
});

movieRouter.get('/', async(req, res) => {
  try {
    let actRes = await axios.get(`http://www.omdbapi.com/?s=action&type=movie&apikey=${key}`);
    let comRes = await axios.get(`http://www.omdbapi.com/?s=comedy&type=movie&apikey=${key}`);
    let famRes = await axios.get(`http://www.omdbapi.com/?s=family&type=movie&apikey=${key}`);
    let data = [ actRes.data, comRes.data, famRes.data ]
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
});

module.exports = {
  movieRouter
}
