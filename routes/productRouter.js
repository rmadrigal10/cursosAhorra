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

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});


router.get('/:id', (req, res) => {
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
  const products = service.findOne(id);
  res.json(products);
});

/******* Método GET ******/


//método POST
router.post('/', (req,res)=>{
  const body = req.body;
  res.status(201).json ({
    message: 'create',
    data: body
  });
})

//PATCH nos permite actualizar solo una parte del objeto.
//requiere de un id
router.patch('/:id', (req,res)=>{
  const { id } = req.params;
  const body = req.body;
  res.json ({
    message: 'update',
    data: body,
    id
  });
})

//Método DELETE
//NO requiere de un DATA: body
//Requiere de un id
router.delete('/:id', (req,res)=>{
  // const body = req.body;
  const { id } = req.params;
  res.json ({
    message: 'deleted',
    // data: body
    id
  });
})

module.exports = router;
