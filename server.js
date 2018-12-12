const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const bodyparser = require('body-parser')
const path = require('path')
const cheerio = require('cheerio')

const app = express()
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";

mongoose.connect(MONGODB_URI);

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ urlencoded: true }))
app.use(bodyparser.json())

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database

const Schema = mongoose.Schema

const stackSchema = new Schema ({
  question: String,
})

const Stack = mongoose.model('Stack', stackSchema)

app.get('/stacks', (req, res) =>{
  axios.get('https://www.nytimes.com/')
  .then(r => {
    const $ = cheerio.load(r.data)
    const stackArr = []
    $('div.css-1j836f9.esl82me3').each((i, elem) => {
      stackArr.push({
        question: `Headline: ${$(elem).children('h2').text()}`
      })
    })
    Stack.create(stackArr)
    res.json(stackArr)
  })
    $('div.css-1ee8y2t.assetWrapper').each((i, elem) => {
      res.send(`
      Summary: ${$(elem).children('div').children('a').text()}
      Image: ${$(elem).children('div').children('div').children('a').children('div').children('figure').children('img').text()}
      `)
    })
      .catch(e => console.log(e))
    })

    app.listen(process.env.PORT || 3070, _ => console.log('https://localhost:3070'))