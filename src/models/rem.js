
const mongoose=require('mongoose')
//schema
const schema=mongoose.Schema;
const todoSchema= new schema({
   task:{
      type:String,
      unique: true},
   message:String,
   id:String
})

//model
const rem=  mongoose.model('rem',todoSchema)

module.exports=rem;