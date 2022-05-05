const faker = require("faker");
const boom = require('@hapi/boom');

class productService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean() // Este es un ejemplo de uso para bloquear productos al cliente
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
    /*res.status(201).json ({
      message: 'create',
      data: body*/
  }

  find() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve (this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if(!product){                                       //Si usamos un estilo "boom" para los mensajes de error,
      throw boom.notFound('Product Not Found'); //debemos evaluarlo como esta forma de la izquierda,
    }                                                   //luego, vamos al errorsHandler,js =>

    if (product.isBlock){                                //Este bloque de código es parte de la regla de negocio
      throw boom.conflict('Product Is Block');   //is.Block, dice que si el producto está bloqueado, entonces
    }                                                    //lanza un error de tipo boom código 409
    return product;                                      //.conflict es igual a una regla de negocios o lógica de...
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

  module.exports = productService;



/*
El crear archivos de servicios es muy similar a construir los "services" en Angular,
ya que separa la capa lógica, del routing y así con los demás elementos, analiza y compara la
estructura de los archivos que hemos estado creando, con la estructura de los proyectos que hemos hecho
en Angular
*/

/*Usando el métdo async, estamos simulando una petición asincrona, necesitamos agregar el prefijo "ASYNC"
en los servicios, así como tambien en el router -> pástae al router*/

// Para manejar los errores de manera asíncrona, podemos usar el método "TRY-CATCH, pero
// directamente en el router
