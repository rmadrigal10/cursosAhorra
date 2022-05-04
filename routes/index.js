const express = require('express');

const productRouter = require('./productRouter');
const usersRouter = require('./usersRouter');


function routerApi (app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
