const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://rzavala1989:illmatic774@cluster0.z0loq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('We established a connection with MongoDB');
});
