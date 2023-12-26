//importo el modelo User para crear usuario
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const { createAccesToken } = require('../libs/jwt')


const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        const userFound = await User.findOne({ email })
        if (userFound) return res.status(400).json({ message: ["the email already exist"] })


        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({ email, password: passwordHash, username })
        const savedUser = await newUser.save()
        const token = await createAccesToken({ id: savedUser._id })
        res.cookie('token', token)  //establecer una cookie
        res.json({
            id: savedUser._id,
            email: savedUser.email,
            username: savedUser.username,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email })

        if (!userFound) return res.status(400).json({ message: "user not found" })

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) return res.status(400).json({ message: "incorrect password" })



        const token = await createAccesToken({ id: userFound._id })
        res.cookie('token', token)  //establecer una cookie
        res.json({
            id: userFound._id,
            email: userFound.email,
            username: userFound.username,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.status(200).send('Logout')
}


const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(404).json({ message: "user not foud" })

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })

}






module.exports = { register, login, logout, profile }