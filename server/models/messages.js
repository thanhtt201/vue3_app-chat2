const mongoose = require('mongoose')

const msgSchema = new mongoose.Schema({
  message: String,
  username: String,
  date: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
})

const Msg = mongoose.model('msg', msgSchema)

module.exports = Msg