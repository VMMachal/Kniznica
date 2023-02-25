const { kniznicaCreate } = require('../backend/business/kniznica')
const { kniznicaGet } = require('../backend/business/kniznica')
const { kniznicaUpdate } = require('../backend/business/kniznica')
const { kniznicaGetAll } = require('../backend/business/kniznica')
const { destroy } = require('../backend/db')

describe('db module', function () {
    after(function () {
        destroy()
    })
    it('call kniznicaCreate', async function () {
        await kniznicaCreate('kniznica c', 'tretia kniznica')
    })
    it('call kniznicaGet', async function () {
        let kniznica = await kniznicaGet('7991c1be-cb43-43bc-a389-210bf4aef8e0')
    })
    it('call kniznicaUpdate', async function () {
        let kniznica = await kniznicaGet('7991c1be-cb43-43bc-a389-210bf4aef8e0')
        await kniznicaUpdate(kniznica.id, kniznica.meno, 'blablabla')
        kniznica = await kniznicaGet(kniznica.id)
    })
    it('call kniznicaGetAll', async function () {
        let kniznice = await kniznicaGetAll()
    })
})
