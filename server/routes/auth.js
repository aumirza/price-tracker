const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.json({ message: 'Login route' })
})

module.exports = router