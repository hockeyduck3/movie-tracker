const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  
  email: {
    type: String,
    required: true
  },
  
  movies: [{type: Object}]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
