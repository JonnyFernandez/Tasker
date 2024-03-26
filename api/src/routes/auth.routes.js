const { Router } = require('express')
const { register, login, logout, profile, verifyToken } = require('../controllers/auth.controller')
const { authRequired } = require('../middlewares/validateToken')
const validateSchema = require('../middlewares/validator.Middleware')
const { registerSchema, loginSchema } = require('../schemas/auth.schema')


const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)
router.get('/verify', verifyToken)


module.exports = router;