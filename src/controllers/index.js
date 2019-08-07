const express = require('express')
const router = express.Router();
const {
    getData
} = require('./homeController')
const {
    getFlower
} = require('./flowerController')

router.get('/', getData)
router.get('/flower/:id', getFlower)

module.exports = router;