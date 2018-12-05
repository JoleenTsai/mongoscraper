const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()
mongoose.connect('mongodb://localhost/scraper', {useNewUrlParser:true})

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded{urlencoded:true})
app.use(bodyparser.json())


app.listen(3000, _ => console.log('https://localhost:3000'))