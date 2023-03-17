const { login } = require('../../src/business/user')
const { destroy } = require('../../src/db')
const { getUser } = require('../../src/business/user')


describe('user', function () {

    after(function () {
        destroy()
    })

    it('call login', async function () {
        let user = await login('karol', 'xxxx')
        if (user.username !== 'karol') {
            throw new Error('Assertion failed')
        }
    })

    it('call getUser', async function () {
        let user = await getUser('karol')
        if (user.username !== 'karol') {
            throw new Error('Assertion failed')
        }
    })
})
