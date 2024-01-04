const Router = require('express')
const { authRequired } = require('../middlewares/validateToken')
const { getCheck, createCheck, deleteCheck } = require('../controllers/check.controller')
// const crateTaskSchema  = require('../schemas/task.schema')
const validateSchema = require('../middlewares/validator.Middleware')
const createTaskSchema = require('../schemas/task.schema')

const routerCheck = Router()

routerCheck.get('/check', authRequired, getCheck)
routerCheck.post('/check', authRequired, validateSchema(createTaskSchema), createCheck)
routerCheck.delete('/check/:id', authRequired, deleteCheck)



module.exports = routerCheck