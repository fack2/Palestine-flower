const express = require('express')
const router = express.Router();
const {getData} = require('./homeController')
const {addone}= require("./addflowerController")
router.get('/',getData)

const {
    getFlower
} = require('./flowerController')

router.get('/flower/:id', getFlower)

router.post('/addFlower',addone )



module.exports=router;
