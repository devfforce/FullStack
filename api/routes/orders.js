const express = require('express');
const router = express.Router();

router.get("/", (req,res,next) => {
    res.status(200).json(
        {
            message:'Orders GET REQUEST'
        }
    )
});
router.post("/", (req,res,next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json(
        {
            message:'ORDER POST(CREATED) REQUEST',
            order:order
        }
    )
});

router.get('/:orderID', (req,res,next) => {
        res.status(200).json({
            message:'you did it',
            id:req.params.orderID
        });
});

router.patch('/:orderID', (req,res,next) => {
  res.status(200).json({
      message:"Upadated order!"
  });
});

router.delete('/:orderID', (req,res,next) => {
    res.status(200).json({
        message:'order DELETED',
        id:req.params.orderID
    });
  });
module.exports = router;