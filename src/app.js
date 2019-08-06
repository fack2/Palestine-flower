const path = require('path')
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
res.send("page home should shown")
})


module.exports = app
