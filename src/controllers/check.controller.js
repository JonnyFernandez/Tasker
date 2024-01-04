const Check = require('../models/checkTask.model')

const getCheck = async (req, res) => {
    try {
        const checks = await Check.find({ user: req.user.id }).populate('user')
        if (checks.length < 1) return res.json({ message: "No Tasks checks" })
        res.json(checks)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const createCheck = async (req, res) => {
    const { title, description, date } = req.body
    try {
        const newCheck = new Check({
            title,
            description,
            date,
            user: req.user.id
        })
        const savedCheck = await newCheck.save()
        res.json(savedCheck);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const deleteCheck = async (req, res) => {
    try {
        const check = await Check.findByIdAndDelete(req.params.id)
        if (!check) return res.status(404).send({ message: 'Task not found' })
        return res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}


module.exports = { getCheck, createCheck, deleteCheck }