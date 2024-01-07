const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const config = require('./config') // Variables de entorno
const app = express()// Aplicación de express

// Definición de autorización y CORS
app.use(
    cors({
        credentials: false,
        origin: config.FRONTEND_URL,
    })
);

// Formato de logs y recepción de datos
app.use(express.json())
app.use(morgan("dev"));

// Definición de variables de app
app.set('PORT', config.PORT)

// Definición de rutas
app.get('/', (req, res) => {
    res.json({
        message: 'Hello word'
    })
})

module.exports = app