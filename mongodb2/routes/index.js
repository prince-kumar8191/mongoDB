const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/',async(req,res)=>{
    const items = await Item.find();
    res.render('form',{items});
});
module.exports = router;