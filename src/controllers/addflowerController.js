const addFlower = require('../database/queries/addflower')
exports.addone = (request,response)=>{

    

const {name,arabicname,imgUrl,description} =request.body; 

    addFlower(name,arabicname,imgUrl,description,(err,res)=>{
 if(err){
    console.log(err)
 }else{
   response.send("success")
 }
})




 }