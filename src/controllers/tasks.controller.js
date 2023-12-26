const Task = require('../models/tasks.model')

const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id }).populate('user') //asi limito que no salgan tareas de otros usuarios, al agregar populate("user") me trae tambien la info del usuario
    res.json(tasks)
}

const createTasks = async (req, res) => {
    const { title, description, date } = req.body

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })

    const savedTask = await newTask.save()
    res.json(savedTask);

}

const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user')
    if (!task) return res.status(404).send({ message: 'Task not found' })
    res.json(task)
}

const deleteTasks = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).send({ message: 'Task not found' })
    return res.sendStatus(204)
}

const updateTasks = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!task) return res.status(404).send({ message: 'Task not found' })
    res.json(task)
}



module.exports = { getTask, getTasks, createTasks, updateTasks, deleteTasks }