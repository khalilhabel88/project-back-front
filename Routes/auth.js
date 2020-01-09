const express = require('express')
const Router = express.Router()
const auth = require('../middelware/auth')
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const config = require("config")


const User = require('../models/User')

Router.get('/', auth,
    async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select("-password")
            res.json(user)

        } catch (error) {
            Console.error(error.message)
            res.status(500).send('Server errors')

        }


    })

Router.post('/', [
    //  must be an email
    check('email', 'please enter email').isEmail(),
    // password must be at least 5 chars long
    check('password', ' password required').exists()
],
    async (req, res) => {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }
        const {email, password } = req.body
        try {
            let user = await User.findOne({ email })
            if (!user)

                res.status(400).json({ erros: [{ msg: 'user mefemech  e7chem' }] })

            //match email an user w tasti
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ erros: [{ msg: 'in valid email mot pass' }] })
            }
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        }
        catch (err) {
            console.error(err.message)
            res.status(500).send('server err')
        }


    }
)






module.exports = Router