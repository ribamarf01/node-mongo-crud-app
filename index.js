const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/routine', { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
const port = 8000

const routine = require('./routes/routine.route')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routine)

app.listen(port, () => {
    console.log(`Servidor executado na porta ${port}`)
})