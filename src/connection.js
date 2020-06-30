const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

const PORT = process.env.port || 8080
const routes = require('./routes/todoroutes')


mongoose.connect('mongodb://localhost/todo', {
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

app.use(morgan('tiny'))
app.use('/api', routes);
app.listen(PORT)




//writing routes 