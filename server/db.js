const mongoose = require('mongoose');

mongoose.connect('your connection string here', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('We established a connection with MongoDB');
});
