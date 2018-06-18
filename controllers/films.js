const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = new express.Router();

//show value by id
filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]});
})

//show all films
filmRouter.get('/', function(req, res){
  res.json(films);
})

//update film at id
filmRouter.put('/:id', function(req, res){
  const index = req.params.id;
  films[index] = new Film(req.body);
  res.json({data: films});
})

//add film
filmRouter.post('/', function(req, res){
  const newFilm = new Film(req.body);
  films.push(newFilm);
  res.json({data: films});
})


module.exports = filmRouter;
