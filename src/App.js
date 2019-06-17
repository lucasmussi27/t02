const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3001
const app = express()

mongoose.connect('mongodb://localhost/work-test', {
  useNewUrlParser: true
})
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())

app.listen(port,() => console.log(`Listening Requests On Port ${port}`))