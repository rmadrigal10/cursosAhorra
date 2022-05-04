// esto nos trae el módulo express
const express = require('express');
const {response} = require("express");
// esto nos trae el módulo express
const port = 3000;
const routerApi = require('./routes/index'); // Enrutamiento para una Única responsabilidad
const { logError, errorHandler } = require('./middlewares/errorsHandler'); // Nos trae los middlewares de error handling

//Esto nos permite recibir objetos en notación json
const app = express();
app.use(express.json());
//Esto nos permite recibir objetos en notación json


app.get('/', (req, res) => {
  res.send('Servidor Node Express');
});

// nos permite hacer el enrutamiento con una única responsabilidad
routerApi(app);
// nos permite hacer el enrutamiento con una única responsabilidad



// los middlewares deben definirse DESPUÉS del routing
app.use( logError );
app.use( errorHandler );
// los middlewares deben definirse DESPUÉS del routing


//nos dice a que puerto se está conectando, por buena práctica, es recomendable indicarlo
app.listen(port, () => {
  console.log('My port' + port);
})
//nos dice a que puerto se está conectando, por buena práctica, es recomendable indicarlo
