const express = require('express');
const {response} = require('express');
const app = express();
//Esto nos permite recibir objetos en notación json
app.use(express.json());
//Esto nos permite recibir objetos en notación json

const routerApi = require('./routes/index');

<<<<<<< HEAD
//Esto nos permite recibir objetos en notación json
const app = express();
app.use(express.json());
//Esto nos permite recibir objetos en notación json

=======
>>>>>>> 6e64c8de2a59cdbbde8a5d738074e7aafea013c0

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
