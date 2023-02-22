const { foo } = require('../backend/db.js');
const { createAndQuery } = require('../backend/db.js');
var assert = require('assert');
describe('db module', function () {
    it('call function foo', function () {
      foo();
    });
    it('call createAndQuery',async function () {
        this.timeout(10000);
        await createAndQuery();
      });
});
