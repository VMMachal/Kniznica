const { kniznicaCreate } = require('../backend/business/kniznica')
const { kniznicaGet } = require('../backend/business/kniznica')
const { kniznicaUpdate } = require('../backend/business/kniznica')
const { kniznicaGetAll } = require('../backend/business/kniznica')
const { kniznicaAddStudent } = require('../backend/business/kniznica')
const { kniznicaGetAllStudents } = require('../backend/business/kniznica')
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
    it('call kniznicaGetAllStudents', async function () {
        let studenti = await kniznicaGetAllStudents(
            '2d5404e4-77f3-4726-a5ed-1f8b0744e526'
        )
        if (studenti.length < 1) {
            throw new Error('Assertion failed')
        }
    })
    it('call kniznicaAddStudent', async function () {
        await kniznicaAddStudent(
            '7991c1be-cb43-43bc-a389-210bf4aef8e0',
            'a1f3ba63-1664-4ac3-a30c-115fe1cf5537'
        )
        let studenti = await kniznicaGetAllStudents(
            '7991c1be-cb43-43bc-a389-210bf4aef8e0'
        )
        const student = studenti.find(function (student) {
            if ((student.id = 'a1f3ba63-1664-4ac3-a30c-115fe1cf5537')) {
                return true
            } else {
                return false
            }
        })
        if (!student) {
            throw new Error('Assertion failed')
        }
    })
})
