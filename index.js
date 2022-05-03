const express = require('express');
const {response} = require('express');

const routerApi = require('./routes/index');

const app = express();
const port = 3000;

/*esto nos trae el módulo
const express = require('express');
const {response} = require("express");
esto nos trae el módulo*/

routerApi(app);

app.get('/', (req, res) => {
  res.send('Servidor Node Express');
});

app.listen(port, () => {
  console.log('My port' + port);
})
