const express = require('express');
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json())

routerApi(app)

//Este es el orden en que se van a ejecutar los middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port '+ port)
});

