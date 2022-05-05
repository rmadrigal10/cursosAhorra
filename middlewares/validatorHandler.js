const boom = require('@hapi/boom');

function validatorHandler (schema, property){     //este middleware es dinámico, ya que recibe el esquema a validar y las propiedades
  return (req, resp, next) => {                   //esta línea es un closure, ya que retorna una función con formato middleware básico, con request, response y next
    const data = req[property];                   //aquí estamos diciendo que vamos a recibir la información a validar por medio de un request
    const { error } = schema.validate(data);      //dinámico [property] => esto es así para no tener que especificar si viene de un req.body, req.params, o req.query
    if (error){                                   //luego, la const {error}, va a estar recibir como propiedad los errores que viene de joi por medio de validate, la cual evalua un esquema con información (data), la cual obtenemos con [property]
      next (boom.badRequest(error));              //después, si hay un error, va a enviar a los middlewares de errorsHandler tipo boom para manejar el error por un badRequest
    }
    next();                                       //si no hay error en la información, pues le dice "fresco, tranquilo, siga con su trabajo xDD
  }
}

module.exports = validatorHandler;


