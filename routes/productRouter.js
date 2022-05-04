const express = require('express');
const {json} = require("express");
const productsService = require('./../services/productsService');

const router = express.Router();
const service = new productsService();

/******* Método GET ******/

/*** las endpoint específicas DEBEN IR ANTES que las dinámicas ***/
router.get('/filter', (req,res)=>{
  res.send('Filtro');
})
/*** las endpoint específicas DEBEN IR ANTES que las dinámicas ***/

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});


router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    //el id debe ser identificado como un STRING, por eso está entre comillas
    /*if(id === '999'){
      //el id debe ser identificado como un STRING, por eso está entre comillas
      res.status(404).json({
        message: 'Object Not Found'
      });
    } else {
      res.json({
        id,
        name: 'Product1',
        price: 500
      });
    }*/
    const products = await service.findOne(id);
    res.json(products);
  } catch ( error ){
    next (error);
  }

});

/******* Método GET ******/


//método POST
router.post('/', async (req,res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//PATCH nos permite actualizar solo una parte del objeto.
//requiere de un id
router.patch('/:id', async (req,res)=>{
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json (product);
  } catch (error){
    res.status(404).json({
      message: error.message
    })
  }
});

//Método DELETE
//NO requiere de un DATA: body
//Requiere de un id
router.delete('/:id', async (req,res)=>{
  // const body = req.body;
  const { id } = req.params;
  const product = await service.delete(id);
  res.json (product);
});

module.exports = router;

/*
Aquí en el router, debemos agregar el prefijo "Async" en los manejadores (Handlers), y await en la
constante donde estamos mandando a llamar el servicio que necesitamos*/

// Para manejar los errores de manera asíncrona, podemos usar el método "TRY-CATCH
//prueba git
