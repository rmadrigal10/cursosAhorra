const express = require('express');

const productRouter = require('./productRouter');
const usersRouter = require('./usersRouter');

//Esto nos permite recibir objetos en notación json
const app = express();
app.use(express.json());
//Esto nos permite recibir objetos en notación json

function routerApi (app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
