//creacion de tokes
const jwt = require('jsonwebtoken')
const { tokenSecret } = require('../config')


const createAccesToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            tokenSecret,
            { expiresIn: "1d" },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );
    })
}

module.exports = { createAccesToken }




