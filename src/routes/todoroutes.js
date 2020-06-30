const express = require('express')
const router = express.Router()
const rem = require('../models/rem')


router.get('/', (req, res) => {
  rem.find({})
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


router.post('/save', (req, res) => {
  const data = req.body
  // we can also write rem.create(data,callback)
  const inst = new rem(data)
  inst.save((error) => {
    if (error) {
      res.json("error")
    } else {
      res.status(200).json("console.log(req.body)")
    };
  })
})


router.delete('/delete/:id', async (req, res) => {
  try {
    const i = req.params.id

    const removed = await rem.deleteOne({
      id: i
    })
    res.json(removed)
  } catch (error) {
    res.json({
      msg: error
    })
  }
})

router.patch('/update/:id', async (req, res) => {
  try {

    await rem.updateOne({
      id: req.params.id
    }, {
      $set: {
        task: "deploy to heroku after developing"
      }
    })
  } catch (error) {
    res.json({
      msg: "error"
    })
  }

})

module.exports = router;