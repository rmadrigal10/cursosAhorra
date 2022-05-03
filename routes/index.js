const productRouter = require('./productRouter');
const usersRouter = require('./usersRouter');

function routerApi (app){
  app.use('/products', productRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
