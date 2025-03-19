const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

app.get('/', (req, res) => {
  res.send("Hello World!")
  console.log(dotenv)
})

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro na conexão com o Atlas', err))

app.listen(PORT, () => {
  console.log("Listening...")
})