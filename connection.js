const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors=require('cors')
const app = express()

const PORT = process.env.PORT || 8082
const routes = require('./routes/todoroutes')


mongoose.connect('mongodb+srv://harish143:12345678@@cluster0.5b5nr.mongodb.net/todo?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})
mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
})

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))
app.use(cors())
app.use(morgan('tiny'))
app.use('/api', routes);
app.use(express.static(path.join(__dirname,"client","build")))
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"client","build","index.html"))
})
app.listen(PORT)




//writing routes 