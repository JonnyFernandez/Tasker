const Task = require('../models/tasks.model')

const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find({ user: req.user.id }).populate('user') //asi limito que no salgan tareas de otros usuarios, al agregar populate("user") me trae tambien la info del usuario
        res.json(tasks)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createTasks = async (req, res) => {
    const { title, description, date } = req.body
    try {
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id
        })
        const savedTask = await newTask.save()
        res.json(savedTask);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};



const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user')
        if (!task) return res.status(404).send({ message: 'Task not found' })
        res.json(task)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

const deleteTasks = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).send({ message: 'Task not found' })
        return res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

const updateTasks = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!task) return res.status(404).send({ message: 'Task not found' })
        res.json(task)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}



module.exports = { getTask, getTasks, createTasks, updateTasks, deleteTasks }