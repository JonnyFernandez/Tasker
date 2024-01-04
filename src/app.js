const express = require('express')
const morgan = require('morgan')
const router = require('../src/routes/auth.routes')
const routerTasks = require('./routes/tasks.routes')
const routerCheck = require('./routes/check.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser()) //para pider ver las cookies en la consola
app.use((req, res, next) => {
    console.log(req.body); // Verifica si los datos del cuerpo de la solicitud están presentes aquí
    next();
});
app.use('/api', router)
app.use('/api', routerTasks)
app.use('/api', routerCheck)

module.exports = app