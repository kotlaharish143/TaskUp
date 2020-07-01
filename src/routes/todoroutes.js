const express = require('express')
const router = express.Router()
const rem = require('../models/rem')


router.get('/', (req, res) => {
  rem.find({email:'kotlaharish1@gmail.com'}).select('todo')
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log("error")
    })
});

router.get('/:id', (req, res) => {
  rem.find({
      id: req.params.id
    })
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


router.delete('/delete/:id', async (req, res) => {
  try {
    const i = req.params.id

    const removed = await rem.deleteOne({
      
    })
    res.json(removed)
  } catch (error) {
    res.json({
      msg: error
    })
  }
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