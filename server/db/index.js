const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/betterchatterbox', (err) => {
  if(err) {
    console.log(err); 
  } else {
    console.log('CONNECTED to the chatter database!!!!');
  }
});

module.exports = connection;
