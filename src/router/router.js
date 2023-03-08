const express = require('express')
const router = express.Router()
const { kniznicaCreate } = require('../business/kniznica')

const FILE = 'router/router.js'

router.get('/', function (req, res) {
    res.json({ message: 'Hello from /api !' })
})

router.post('/', function (req, res) {
    console.log('@@@@@@@@@@@ cp 1000')
    console.dir(req.body)
    res.json({ message: 'Hello from /api !' })
})

router.post('/kniznicaCreate', async function (req, res) {
    const FUNC = 'post(/kniznicaCreate)'
    try {
        console.log('@@@@@@@@@@@ cp 3000')
        console.dir(req.body)
        let meno = req.body.meno
        if (!meno) {
            res.status(400)
            res.end()
            return
        }
        let popis = req.body.popis
        await kniznicaCreate(meno, popis)
        res.status(200)
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

exports.router = router
