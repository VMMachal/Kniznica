const { foo } = require('../backend/db')
const { tryIfDatabaseConnectionIsWorking } = require('../backend/db')
const { destroy } = require('../backend/db')

describe('db module', function () {
    after(function () {
        destroy()
        // runs once after the last test in this block
    })
    it('call tryIfDatabaseConnectionIsWorking', async function () {
        await tryIfDatabaseConnectionIsWorking()
    })
})
