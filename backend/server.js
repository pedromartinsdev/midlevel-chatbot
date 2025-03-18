const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello World!")
  console.log(dotenv)
})

app.listen(port, () => {
  console.log("Listening...")
})