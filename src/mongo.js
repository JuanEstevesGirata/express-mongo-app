const mongoose = require('mongoose');


const connectionString = process.env.MONGO_DB_URI

if (!connectionString) {
  console.error('Recuerda que tienes que tener un archivo .env con las variables de entorno definidas y el MONGO_DB_URI que servirá de connection string. En las clases usamos MongoDB Atlas pero puedes usar cualquier base de datos de MongoDB (local incluso).')
}

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

process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})