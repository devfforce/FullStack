const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Product = require('../models/product');

router.get("/", (req,res,next) => {
    Product.find()
    .exec()
    .then(docs =>{
        var Tprice=0;
        for(var i=0;i<docs.length;i++){
            Tprice=parseFloat(docs[i]["price"])+Tprice;
        }
        console.log(docs);
        res.status(200).json(Tprice);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
           error:err
        });
    });
});

router.get("/:byname", (req,res,next) => {
    Product.find()
    .exec()
    .then(docs =>{
        var Tprice=0;
        for(var i=0;i<docs.length;i++){
            if (req.params.byname == docs[i]["name"]){
            Tprice=parseFloat(docs[i]["price"])+Tprice;
        }}
        console.log(docs);
        res.status(200).json(Tprice);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
           error:err
        });
    });
});
module.exports = router;