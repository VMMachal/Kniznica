const { foo } = require('../backend/db.js')
const { tryIfDatabaseConnectionIsWorking } = require('../backend/db.js')
const { destroy } = require('../backend/db.js')

describe('db module', function () {
    after(function () {
        destroy()
        // runs once after the last test in this block
    })
    it('call tryIfDatabaseConnectionIsWorking', async function () {
        await tryIfDatabaseConnectionIsWorking()
    })
})
