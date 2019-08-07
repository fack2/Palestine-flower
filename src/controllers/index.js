const express =require('express')
const router = express.Router();
const {getData} = require('./homeController')
const {addone}= require("./addflowerController")
router.get('/',getData)


router.post('/addFlower',addone )



module.exports=router;