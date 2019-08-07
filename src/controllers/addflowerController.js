const addFlower = require('../database/queries/addflower')
exports.addone = (request,response)=>{

    
const input=request.body


    addFlower(input.name,input. arabicname,input.imgUrl,input.description,(err,res)=>{
 if(err){
    console.log(err)
 }else{
   response.send("success")
 }
})




 }