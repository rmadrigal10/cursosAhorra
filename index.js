const express = require('express');
const {response} = require('express');
const port = 3000;
const routerApi = require('./routes/index');
const { logError, errorHandler } = require('./middlewares/errorsHandler');

//Esto nos permite recibir objetos en notación json
const app = express();
app.use(express.json());
//Esto nos permite recibir objetos en notación json



app.get('/', (req, res) => {
  res.send('Servidor Node Express');
});

/*esto nos trae el módulo
const express = require('express');
const {response} = require("express");
esto nos trae el módulo*/

routerApi(app);

// los middlewares deben definirse DESPUÉS del routing
app.use( logError );
app.use( errorHandler );
// los middlewares deben definirse DESPUÉS del routing




app.listen(port, () => {
  console.log('My port' + port);
})
