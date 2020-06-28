const express=require('express')
const router=express.Router()
const rem=require('../models/rem')





router.get('/',(req,res)=>{
    rem.find({  })
    .then((data)=>{  res.json(data);
    console.log(data)})
     .catch(()=>{console.log("error")})
  });


  router.post('/save',(req,res)=>{
    const data=req.body
    console.log(data)
    const inst=new rem(data)
    inst.save((error)=>{
    if(error){
      console.log("error")
    }
    else{
      res.json(console.log(req.body)) 
    };
  })
})
router.delete('/delete/:id',(req,res)=>{
  const i=req.params.id
  rem.deleteOne({id:i}).exec()
})
 module.exports=router;