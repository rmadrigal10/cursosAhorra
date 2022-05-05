function logError(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

  function BoomErrorHandler(err, req, res, next) {        //dice: "si el error es de tipo -boom-, entonces,
  if(err.isBoom){                                         //crea una constante que alamcene la información del {output}
    const { output } = err;                               //del boom y que se le asigne al mensaje de error, después,
    res.status(output.statusCode).json(output.payload);   //devuelve como res...puesta el status, con un código de error dinámico,
  }                                                       //en forma de .json que contenga la información del output payload
  next(err);                                              //<= esta linea significa que si no hay error, ejecute el siguiente middleware de error
}

module.exports = { logError, errorHandler, BoomErrorHandler }
