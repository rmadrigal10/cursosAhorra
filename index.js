const express = require('express');
const {response} = require('express');

const routerApi = require('./routes/index');


//Esto nos permite recibir objetos en notación json
const app = express();
app.use(express.json());
//Esto nos permite recibir objetos en notación json

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
