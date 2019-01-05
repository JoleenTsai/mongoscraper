const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";

mongoose.connect(MONGODB_URI);

app.use(express.static(path.join(__dirname, 'public')))
// app.use(bodyparser.urlencoded({ urlencoded: true }))
// app.use(bodyparser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

mongoose.connect('mongodb://localhost/nytScraper', { useNewUrlParser: true })

app.set(require('./routes')(app))

    app.listen(process.env.PORT || 3000, _ => console.log('http://localhost:3000'))