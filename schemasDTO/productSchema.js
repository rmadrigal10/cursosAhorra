//módulo de validaciones JOI
const Joi = require('joi');
//módulo de validaciones JOI

//Constantes de validación
const id = Joi.string().uuid();                                 //la constante id debe tener un formato Joi, de tipo string, y de uuid
const name = Joi.string().min(5).max(25);            //name debe ser Joi, tipo string, alfanumérico, con longitud mínima y máxima
const price = Joi.number().integer().min(1);              //price debe ser joy, tipo número entero, con longitud mínima
const image = Joi.string().uri();                              //debe tener una imagen desde una url en formato string
//Constantes de validación

//
//Esquemas
//
const createProductSchema = Joi.object({               //esté objeto de formato para la validación de datos de creación
  name: name.required(),                                      //requiere de un nombre
  price: price.required(),                                    //requiere un precio
  image: image.required()                                     ////requiere una imagen
});

const updateProductSchema = Joi.object({               //esté objeto de formato para la validación de datos de modificación
  name: name,                                                 //puede tener un nombre
  price: price,                                               //puede tener un precio
  image: image                                                //puede tener una imagen
});

const getProductSchema = Joi.object({                  //ese objeto de formato para la validación de obtención de un producto
  id: id.required()                                           //requiere de un id
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };



