const jwt = require('jsonwebtoken')
const { tokenSecret } = require('../config')

const authRequired = (req, res, next) => {
    // const token = req.headers.cookie // asi me sale las cookies meda rarasss
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized/Not token" });

    jwt.verify(token, tokenSecret, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" })

        req.user = user


    })
    next()
}


module.exports = { authRequired }