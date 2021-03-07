const User = require('../models/user')
const router = require('express').Router()
const userRoute = require('../routes/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { jwtSecret } = require('../vars')

// USing JWT and Bcrypt
// User logs in/signs up and then cookie is created
// user can logout and cookie will be deleted
router.get('/signup', (req, res) => {
    res.render('user/signup')
})
router.post('/signup', async (req, res) => {
    try {
        console.log("req.body:", req.body)
        const user =  await User.create(req.body)

        let payload = {email: user.email}
        console.log('payload:', payload)
        let secret = jwtSecret
        let options = { expiresIn: '1d' }
        let token = jwt.sign(payload, secret, options)
        res.cookie('api_token', token, { maxAge: 900000, httpOnly: true })
        res.redirect('/')
    } catch (err) {
        res.status(400).send({err: err.message})
    }
})
router.get('/login', (req, res) => {
    res.render('user/login')
})
router.post('/login', async (req, res) => {
    try {
        if (req.user) return res.status(400).send({message: 'You are already logged in'})

        const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email})
        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(401).send({message: 'Could not log in using those credentials'})
        
        const payload = { user: user.email };
        const secret = process.env.SECRET;
        const options = { expiresIn: '1d' };
        const token = jwt.sign(payload, secret, options);
        res.cookie('api_token', token, { maxAge: 900000, httpOnly: true })
        res.redirect('/')
    
    } catch (err) {
        res.status(400).send({err: err.message})
    }
})
// There is an apitoken stuck even when im not logged in...
router.get('/logout', (req, res) => {
    if (!req.user) return res.status(401).send({message: 'You must be logged in to do that'})

    res.clearCookie('api_token')
    res.redirect('/')
})

module.exports = router