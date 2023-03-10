const express = require('express')
const router = express.Router()
const { kniznicaCreate } = require('../business/kniznica')
const { kniznicaGet } = require('../business/kniznica')
const { kniznicaGetAll } = require('../business/kniznica')
const { kniznicaGetAllStudents } = require('../business/kniznica')
const { kniznicaUpdate } = require('../business/kniznica')
const { kniznicaAddStudent } = require('../business/kniznica')
const { kniznicaRemoveStudent } = require('../business/kniznica')
const { knihaCreate } = require('../business/kniha')
const { knihaGet } = require('../business/kniha')
const { knihaGetAll } = require('../business/kniha')
const { knihaUpdate } = require('../business/kniha')
const { studentGet } = require('../business/student')
const { studentCreate } = require('../business/student')
const { vypozickaGet } = require('../business/vypozicka')
const { vypozickaCreate } = require('../business/vypozicka')

const FILE = 'router/router.js'

router.get('/', function (req, res) {
    console.dir(req.query);
    res.json({ message: 'Hello from /api !' })
})

router.get('/kniznicaGet', async function (req, res) {
    const FUNC = 'get(/kniznicaGet)'
    try {
        console.dir(req.query)
        let id = req.query.id
        if (!id) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let result = await kniznicaGet(id)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.get('/kniznicaGetAll', async function (req, res) {
    const FUNC = 'get(/kniznicaGetAll)'
    try {
        console.dir(req.query)
        let id = req.query.id
        if (!id) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let result = await kniznicaGetAll(id)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.get('/knihaGet', async function (req, res) {
    const FUNC = 'get(/knihaGet)'
    try {
        console.dir(req.query)
        let id = req.query.id
        if (!id) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let result = await knihaGet(id)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.get('/knihaGetAll', async function (req, res) {
    const FUNC = 'get(/knihaGetAll)'
    try {
        console.dir(req.query)
        let id = req.query.id
        if (!id) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let result = await knihaGetAll(id)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.get('/kniznicaGetAllStudents', async function (req, res) {
    const FUNC = 'get(/kniznicaGetAllStudents)'
    try {
        console.dir(req.query)
        let kniznicaId = req.query.kniznicaId
        if (!kniznicaId) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let result = await kniznicaGetAllStudents(kniznicaId)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})



router.get('/studentGet', async function (req, res) {
    const FUNC = 'get(/studentGet)'
    try {
        console.dir(req.query)
        let id = req.query.id
        if (!id) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let result = await studentGet(id)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.get('/vypozickaGet', async function (req, res) {
    const FUNC = 'get(/vypozickaGet)'
    try {
        console.dir(req.query)
        let kniznicaId = req.query.kniznicaId
        if (!kniznicaId) {
            res.status(400)
            result.json({});
            res.end()
            return
        }
        let studentId = req.query.studentId
        let knihaId = req.query.knihaId
        let result = await vypozickaGet(kniznicaId,studentId,knihaId)
        res.status(200)
        res.json({result});
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/', function (req, res) {
    console.dir(req.body)
    res.json({ message: 'Hello from /api !' })
})

router.post('/kniznicaCreate', async function (req, res) {
    const FUNC = 'post(/kniznicaCreate)'
    try {
        console.dir(req.body)
        let meno = req.body.meno
        if (!meno) {
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let popis = req.body.popis
        let id = await kniznicaCreate(meno, popis)
        res.status(200)
        res.json({id});
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/kniznicaUpdate', async function (req, res) {
    const FUNC = 'post(/kniznicaUpdate)'
    try {
        console.dir(req.body)
        let id = req.body.id
        if (!id) {
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let meno = req.body.meno
        let popis = req.body.popis
        let result = await kniznicaUpdate(id, meno, popis)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/kniznicaAddStudent', async function (req, res) {
    const FUNC = 'post(/kniznicaAddStudent)'
    try {
        console.dir(req.body)
        let kniznicaId = req.body.kniznicaId
        if (!kniznicaId) {
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let studentId = req.body.studentId
        let result = await kniznicaAddStudent(kniznicaId, studentId)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/kniznicaRemoveStudent', async function (req, res) {
    const FUNC = 'post(/kniznicaRemoveStudent)'
    try {
        console.dir(req.body)
        let kniznicaId = req.body.kniznicaId
        if (!kniznicaId) {
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let studentId = req.body.studentId
        let result = await kniznicaRemoveStudent(kniznicaId, studentId)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/knihaCreate', async function (req, res) {
    const FUNC = 'post(/knihaCreate)'
    try {
        console.dir(req.body)
        let titul = req.body.titul
        if (!titul) {
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let popis = req.body.popis
        let id = await knihaCreate(titul, popis)
        res.status(200)
        res.json({id});
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/knihaUpdate', async function (req, res) {
    const FUNC = 'post(/knihaUpdate)'
    try {
        console.dir(req.body)
        let id = req.body.id
        if (!id) {
            res.status(400)
            console.log("HERE")
            res.json({});
            res.end()
            return
        }
        let titul = req.body.titul
        let popis = req.body.popis
        let result = await knihaUpdate(id, titul, popis)
        res.status(200)
        res.json(result);
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/studentCreate', async function (req, res) {
    const FUNC = 'post(/studentCreate)'
    try {
        console.dir(req.body)
        let meno = req.body.meno
        if (!meno) {
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let priezvisko = req.body.priezvisko
        let id = await studentCreate(meno, priezvisko)
        res.status(200)
        res.json({id});
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})

router.post('/vypozickaCreate', async function (req, res) {
    const FUNC = 'post(/vypozickaCreate)'
    try {
        console.dir(req.body)
        let kniznicaId = req.body.kniznicaId
        if (!kniznicaId) {
            console.log("@@@@@@@@@@ cp 200")
            res.status(400)
            res.json({});
            res.end()
            return
        }
        let studentId = req.body.studentId
        let knihaId = req.body.knihaId
        let id = await vypozickaCreate(kniznicaId, studentId, knihaId)
        res.status(200)
        res.json({id});
        res.end()
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err)
        res.status(500)
        res.end()
    }
})


exports.router = router
