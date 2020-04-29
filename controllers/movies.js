
const express = require('express');
const axios = require('axios');

const movieRouter = express.Router();

const key = require('./key');
const APIKey = require('./movieDbKey')


movieRouter.get('/action', async(req, res) => {
  try {
    let rAct = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=28`)
    let rActT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=28&page=2`)
    let data = { act: rAct.data.results.concat(rActT.data.results) };
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
});

movieRouter.get('/adventure', async(req, res) => {
  try {
    let rAdv = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=12`)
    let rAdvT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=12&page=2`)
    let data = { adv: rAdv.data.results.concat(rAdvT.data.results) };
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
})

movieRouter.get('/comedy', async(req, res) => {
  try {
    let rCom = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=35`)
    let rComT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=35&page=2`)
    let data = { com: rCom.data.results.concat(rComT.data.results) };
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
})

movieRouter.get('/family', async(req, res) => {
  try {
    let rFam = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=10751`)
    let rFamT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=10751&page=2`)
    let data = { fam: rFam.data.results.concat(rFamT.data.results) };
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
})

movieRouter.get('/thriller', async(req, res) => {
  try {
    let rTrl = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=53`)
    let rTrlT = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&include_adult=false&include_video=false&with_genres=53&page=2`)
    let data = { thr: rTrl.data.results.concat(rTrlT.data.results) };
    res.send(data);
  }
  catch (e){
    console.log(e);
  }
})

movieRouter.get('/trailer/:movieId', async(req, res) => {
  try {
    let movie = req.params.movieId
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${APIKey}&language=en-US`)
    res.send(response.data.results[0].key)
  }
  catch (e) {
    console.log(e);
  }
});


movieRouter.get('/:movie', async(req, res) => {
  try {
    let title = req.params.movie;
    let single = await axios.get(`http://www.omdbapi.com/?t=${title}&type=movie&apikey=${key}`);
    let movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${title}&include_adult=false`)
    let actors = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${APIKey}&language=en-US&query=${title}&include_adult=false`)
    let actor = await axios.get(`https://api.themoviedb.org/3/person/${actors.data.results[0].id}?api_key=${APIKey}&language=en-US`)
    let relatedMovies = await axios.get(`https://api.themoviedb.org/3/person/${actors.data.results[0].id}/movie_credits?api_key=${APIKey}&language=en-US`)
    let response = []
    response.push(single.data, movies.data, actor.data, relatedMovies.data)
    res.send(response);
  }
  catch (e) {
    console.log(e);
  }
});

module.exports = {
  movieRouter
}
