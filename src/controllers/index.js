const express =require('express')
const router = express.Router();
const {getData} = require('./homeController')
router.get('/',getData)




module.exports=router;