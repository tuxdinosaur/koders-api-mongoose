const mongoose = require('mongoose')

// mongo://[user]:[password]@[host]/[db]?[arguments/queryParameters]
const DB_PASSWORD = '11vanTux'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://tuxdinosaur:${DB_PASSWORD}@pachangapp-qzdv8.azure.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
