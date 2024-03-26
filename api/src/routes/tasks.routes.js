const Router = require('express')
const { authRequired } = require('../middlewares/validateToken')
const { getTask, getTasks, createTasks, updateTasks, deleteTasks } = require('../controllers/tasks.controller')
// const crateTaskSchema  = require('../schemas/task.schema')
const validateSchema = require('../middlewares/validator.Middleware')
const createTaskSchema = require('../schemas/task.schema')

const routerTasks = Router()

routerTasks.get('/tasks', authRequired, getTasks)
routerTasks.get('/tasks/:id', authRequired, getTask)
routerTasks.post('/tasks', authRequired, validateSchema(createTaskSchema), createTasks)
routerTasks.delete('/tasks/:id', authRequired, deleteTasks)
routerTasks.put('/tasks/:id', authRequired, updateTasks)



module.exports = routerTasks