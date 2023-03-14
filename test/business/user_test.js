const { login } = require('../../src/business/user')
const { destroy } = require('../../src/db')

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
})
