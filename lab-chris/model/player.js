'use strict';

const mongoose = require('mongoose');


const playerSchema = mongoose.Schema({
  name: {type:String, required: true, unique: true},
  team: {type:String, required: true},
  position: {type:String, required: true},
  created: {type:Date, required: true},
});


module.exports = mongoose.model('player', playerSchema);
