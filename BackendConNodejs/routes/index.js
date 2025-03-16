const productsRouter = require('./productsRouter')
const usersRouter = require('./userRouter')


function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter)
}

module.exports = routerApi;
