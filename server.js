const express = require('express')
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const api = require('./server/routes/api')


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weatherDB", { useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)




app.listen(port, () => { console.log(`Running on port ${port}`) })  