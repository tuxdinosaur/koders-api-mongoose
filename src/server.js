
// Definiendo el servidor

const express = require('express')

// Importar rutas
const kodersRouter = require('./routes/koders')

const app = express()

app.use(express.json())

// Montar router
app.use('/koders', kodersRouter)

module.exports = app
