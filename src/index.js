require('dotenv').config();
const express = require ('express')
const morgan = require ('morgan')
const cors = require ('cors')
const allRoutes = require ('./routes')
// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import allRoutes from './routes';


//CONECTION DB
require('./mongo');


//INCIALIZAR EXPRESS

const app = express();


// CONGIGURACIONES

const port = (process.env.PORT || 3001);


//MIDDLEWARE
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev'));
app.use(allRoutes);


//PUERTOS

app.set('port', port);


//EXPRESS

app.listen(app.get('port'), (error)=> {
    if(error) {
        console.error('Error al iniciar el servidor')
    }
    else {
        console.log('Servidor iniciado en el puerto:'+ port)
    }
})


module.exports = app;



