const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://dbJuan:abcd1234@cluster0.so6wa.mongodb.net/test'

// conexion a mongodb
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.log(err)
  })
