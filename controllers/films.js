const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = new express.Router();


filmRouter.get('/', function(req, res){
  res.json(films);
})



module.exports = filmRouter;
