const express = require("express")
const Router = express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const config =require("config")

const User = require('../models/User')

Router.post('/', [
    //  must be an email
    check('email', 'please enter email').isEmail(),
    // password must be at least 5 chars long
    check('password', 'please give me a password').isLength({ min: 5 })
],
    async (req, res) => {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }
        const { firstname, lastname, email, password } = req.body
        try {
            let user = await User.findOne({ email })
            if (user)

                res.status(400).json({ erros: [{ msg: 'user all ready exist' }] })

            user = new User({
                firstname,
                lastname,
                email,
                password
            })

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save()

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