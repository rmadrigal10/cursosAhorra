// esto nos trae el módulo express
const express = require('express');
const {response} = require('express');
// esto nos trae el módulo express
const cors = require('cors');      //nos trae a cors para el control de acceso a la API

const port = process.env.PORT || 3000;

const routerApi = require('./routes/index'); // Enrutamiento para una Única responsabilidad
const { logError, errorHandler, BoomErrorHandler } = require('./middlewares/errorsHandler'); // Nos trae los middlewares de error handling


//cors

app.use(cors(options));
const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

//cors

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
app.use( BoomErrorHandler );
app.use( errorHandler );
// los middlewares deben definirse DESPUÉS del routing


//nos dice a que puerto se está conectando, por buena práctica, es recomendable indicarlo
app.listen(port, () => {
  console.log('My port' + port);
})
//nos dice a que puerto se está conectando, por buena práctica, es recomendable indicarlo
