const express = require('express');
const {response} = require('express');
const app = express();
//Esto nos permite recibir objetos en notación json
app.use(express.json());
//Esto nos permite recibir objetos en notación json

const routerApi = require('./routes/index');


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
