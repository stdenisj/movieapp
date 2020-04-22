
const express = require('express');
const axios = require('axios');

const movieRouter = express.Router();

const key = require('./key');
const APIKey = require('./movieDbKey')


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
    let rAct = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=28`)
    let rActT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=28&page=2`)
    let rAdv = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=12`)
    let rAdvT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=12&page=2`)
    let rCom = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=35`)
    let rComT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=35&page=2`)
    let rFam = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=10751`)
    let rFamT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=10751&page=2`)
    let rTrl = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=53`)
    let rTrlT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=53&page=2`)
    data = {
      act: rAct.data.results.concat(rActT.data.results),
      adv: rAdv.data.results.concat(rAdvT.data.results),
      com: rCom.data.results.concat(rComT.data.results),
      fam: rFam.data.results.concat(rFamT.data.results),
      thr: rTrl.data.results.concat(rTrlT.data.results)
    }
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
});

module.exports = {
  movieRouter
}
