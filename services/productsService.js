const faker = require("faker");

class productService{

  constructor() {
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
      });
    }
  }

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
   return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = productService

/*
El crear archivos de servicios es muy similar a construir los "services" en Angular,
ya que separa la capa lógica, del routing y así con los demás elementos, analiza y compara la
estructura de los archivos que hemos estado creando, con la estructura de los proyectos que hemos hecho
en Angular
*/
