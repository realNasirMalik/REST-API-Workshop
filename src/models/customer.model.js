let mongoose = require('mongoose')

const server = 'rest-api-workshop-cztdw.mongodb.net'
const database = 'rest-api-workshop?retryWrites=true&w=majority'
const user = 'realNasirMalik'
const password = 'fZsMGZXQMx8FCTgkBwgFtEvwD7ML'

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);



let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
