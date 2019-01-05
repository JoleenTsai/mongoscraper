const { Schema, model } = require('mongoose')

const stackSchema = new Schema({
  headline: String,
  summary: String,
  url: String,
  isSaved: Boolean
})

const Stack = model('Stack', stackSchema)

module.exports = Stack