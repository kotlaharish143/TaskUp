const express = require('express')
const router = express.Router()
const rem = require('../models/rem');
const { getMaxListeners } = require('../models/rem');




router.get('/:email', (req, res) => {
  rem.find({email:req.params.email}).select('todo')

    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log("error")
    })
});


router.post('/create', (req, res) => {
  const data = req.body
  // we can also write rem.create(data,callback)
  const inst = new rem(data)
  inst.save((error) => {
    if (error) {
      res.json("error")
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


router.patch('/update/email/:email/id/:id', async (req, res) => {
 
  const email= req.params.email;
  const id= req.params.id;
  console.log(email,id)
  await rem.findOneAndUpdate({email: req.params.email}
    ,{  $pull:{
      todo:{
        id:req.params.id
      }
    }
    }).then(()=>{res.json("success ra mawa update ayyindi")})
  .catch((err)=>{console.log(err)})
})

router.patch('/update/:email', async (req, res) => {
 
    const todo = req.body
    console.log(todo)
    console.log(req.params.email)
    await rem.findOneAndUpdate({
      email: req.params.email
      
    }, {
      $push: {
        todo: todo

      
    }}).then(()=>{res.json("success ra mawa update ayyindi")})
    .catch((err)=>{console.log(err)})
  })
  
   
  



module.exports = router;