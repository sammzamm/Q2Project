var express = require('express');
var router = express.Router();
const knex = require('../knex')

router.get('/', (req, res, next) => {
  knex('questions')
  .then(questions => {
    console.log(questions);
    res.render('test', { questions: questions })
  })
})


router.post('/', (req, res, next) => {
  // this will post to database with users personality result
  // this is a stretch. we don't have access to test yet



  res.redirect('/result')
})

module.exports = router;
