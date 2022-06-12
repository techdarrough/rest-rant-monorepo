const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrpyt')

const { User } = db

router.post('/', async (req, res) => {
    let ( password, ...rest ) = req.body
    const user = await User.create({
        const user = await User.create({
            ...rest,
            passwordDigest: await bcrypt.has(password, 10)
        })
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router