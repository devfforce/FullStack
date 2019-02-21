const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Product = require('../models/product');

router.get("/", (req,res,next) => {
    var Stotal=[];
    var names=["a"];
    Product.find()
    .exec()
    .then(docs =>{
        
        var Pname="";
        var Tprice=0;
        for(var i=0;i<docs.length;i++){
            

            if (!names.includes(docs[i]["name"])){
                var Pname = docs[i]["name"];

                for(var j=0;j<docs.length;j++){
                    if(Pname == docs[j]["name"]){
                    Tprice=parseFloat(docs[j]["price"])+Tprice;
                    }
                }
                const products = new Product({
                    _id: new mongoose.Types.ObjectId(),
                    name:Pname,
                    price:Tprice
                });
                names.push(Pname);
                Stotal.push(products);
                Tprice=0;
                }
        
        
        }
        console.log(Stotal);
        res.status(200).json(Stotal);
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