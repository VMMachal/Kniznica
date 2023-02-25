const { studentCreate } = require('../backend/business/student')
const { studentGet } = require('../backend/business/student')
const { studentUpdate } = require('../backend/business/student')
const { studentGetAll } = require('../backend/business/student')
const { destroy } = require('../backend/db')

describe('db module', function () {
    after(function () {
        destroy()
    })
    it('call studentCreate', async function () {
        await studentCreate('student c', 'tretia student')
    })
    it('call studentGet', async function () {
        let student = await studentGet('bde492e7-1902-4e34-a304-6e740d6729b2')
    })
    it('call studentUpdate', async function () {
        let student = await studentGet('bde492e7-1902-4e34-a304-6e740d6729b2')
        await studentUpdate(student.id, student.meno, 'blablabla')
        student = await studentGet(student.id)
    })
    it('call studentGetAll', async function () {
        let kniznice = await studentGetAll()
    })
})
