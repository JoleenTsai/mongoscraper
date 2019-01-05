const { Stack } = require('../models')
const cheerio = require('cheerio')
const axios = require('axios')

async function getStacks() {
  let stacks = await new Promise((resolve, reject) => {
    axios.get('https://www.nytimes.com/section/world')
      .then(r => r.data)
      .then(r => {
        let data = []
        const $ = cheerio.load(r)
        $('div.story-body').each((i, elem) => {
          let stack = {}
          stack = 
          {
            headline: $(elem).children('h2.headline').text(),
            summary: $(elem).children("p.summary").text(),
            url: $(elem).children('div.thumb').children('a').attr('href'),
            image: $(elem).children('div.thumb').children('a').children('img').attr('src'),
            isSaved: false
          }
          data.push(stack)
        })
        resolve(data)
      })
  })
  return stacks
}

module.exports = app => {
  app.get('/saves', (req, res) => {
    Stack.find({ isSaved: true })
    .then(r=> res.json(r))
    .catch(e => console.error(e))
  })
  app.put('./stack/:id', (req, res) => {
    Stack.findByIdAndUpdate(req.params.id, { isSaved: true })
      .then(console.log('hi'))
      .then(r => res.sendStatus(200))
      .catch(res.sendStatus(404))
  })
  app.post('/scrape', (req, res) => {
    getStacks()
    .then(r=> {
      Stack.deleteMany({ isSaved: false })
      .then(_ => {
        Stack.create(r)
        .then(_ => res.json(r))
      })
    })
    .catch(e=>res.send(e))
  })
  app.delete('/stack/:id', (req, res) => {
    Stack.findByIdAndDelete(req.params.id)
    .then(r=> res.sendStatus(200))
    .catch(e => res.sendStatus(404))
  })
}
