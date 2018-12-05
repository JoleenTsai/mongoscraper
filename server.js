const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const bodyparser = require('body-parser')
const path = require('path')
const cheerio = require('cheerio')

const app = express()
mongoose.connect('mongodb://localhost/scraper', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ urlencoded: true }))
app.use(bodyparser.json())


app.listen(3050, _ => console.log('https://localhost:3050'))

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.connect(MONGODB_URI);

axios.get('https://www.nytimes.com/')
  .then(r => {
    const $ = cheerio.load(r.data)
    $('div.css-1j836f9.esl82me3').each((i, elem) => {
      console.log(`Headline: ${$(elem).children('h2').text()}`)
    })
    $('div.css-1ee8y2t.assetWrapper').each((i, elem) => {
      console.log(`
      Summary: ${$(elem).children('div').children('a').text()}
      Image: ${$(elem).children('div').children('div').children('a').children('div').children('figure').children('img').text()}
      `)
    })
    // $('div.css-1yjtett').each((i, elem) => {
    //   console.log(`URL: ${$(elem).children('a').text()}`)
    // })
    // $('div.css-14clni4.eqveam62').each((i, elem) => {
    //   console.log(`Headline: ${$(elem).children('h3').text()}`)
    // })
  })
  .catch(e => console.log(e))