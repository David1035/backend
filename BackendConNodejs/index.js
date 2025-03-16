const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require('./routes')

const app = express();
const port = 3000;


routerApi(app)



app.listen(port, () => {
  console.log('Mi port '+ port)
});




