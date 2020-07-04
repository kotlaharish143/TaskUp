const express = require('express')
const router = express.Router()
const rem = require('../models/rem');
const cors=require('cors')




router.get('/:email', async (req, res) => {
  try{
  const data=await rem.find({email:req.params.email}).select('todo')
      res.json(data);
      console.log(data)
    }
    catch(err) {
      console.log(err)
      
    }
});


router.post('/create', (req, res) => {
  const data = req.body
  // we can also write rem.create(data,callback)
  const inst = new rem(data)
  inst.save((error) => {
    if (error) {
      res.json("err")
    } else {
      res.json("console.log(req.body)")
    };
  })
})
router.get('/login/email/:email/password/:password', async (req, res) => {
  const email = req.params.email
  const password=req.params.password
 
  // we can also write rem.create(data,callback)
  const x= await rem.find({email:email},{password:1})
  
  if(x.length){
   if(x[0].password==password)
   { 
      res.status(200).json("succesfully sent")}
   else{
    res.status(404).json("Error Logging in")
   }
  }
  else{
    res.status(404).json("You are not signed up")
  }

})


router.patch('/update/email/:email/id/:id',cors(), async (req, res) => {
 
  const email= req.params.email;
  const id= req.params.id;
  console.log(email,id)
  try{
    await rem.findOneAndUpdate({email: req.params.email}
      ,{  $pull:{
        todo:{
          id:req.params.id
        }
      }
      })
  }
 catch(err){
   console.log(err)
 }
  
})

router.patch('/update/:email',cors(), async (req, res) => {
   try{
    const todo = req.body
    console.log(todo)
    console.log(req.params.email)
    await rem.findOneAndUpdate({
      email: req.params.email   
    }, {
      $push: {
        todo: todo   
    }})
   }
  catch(err){
console.log(err)
  }
  })

module.exports = router;
