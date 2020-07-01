const mongoose = require('mongoose')
//schema
const schema = mongoose.Schema;
const todoSchema = new schema({
   email: {
      type: String,
      unique: true
   },
   password: String,
   todo: [{
      task: String,
      message: String,
      id: {
         type: String,

      }
   }]

})

//model
const rem = mongoose.model('rem', todoSchema)

module.exports = rem;