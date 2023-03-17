const { getConnection } = require('../db')
const { closeConnection } = require('../db')

const FILE = 'user/user.js'

async function login(userName, password) {
    const FUNC = 'login()';
    let conn
    try {
        conn = await getConnection()

        let rows = await conn.query('select * from user where username = ?', [
            userName,
        ])
        if (rows.length < 1) {
            console.warn(`${FILE}:${FUNC}: no such user`);
            throw new Error('no such user')
        }
        let user = rows[0]
        //attention this is not correct, we should store and compare encrypted password
        if (user.heslo === password) {
            delete user.heslo
            return user
        }
        else {
            console.warn(`${FILE}:${FUNC}: unauthenticated`);
            throw new Error ('unauthenticated');
        }
    } finally {
        closeConnection(conn)
    }
}

async function getUser (userName) {
    const FUNC = 'getUser()';
    let conn
    try {
        conn = await getConnection()

        let rows = await conn.query('select * from user where username = ?', [
            userName,
        ])
        if (rows.length < 1) {
            console.warn(`${FILE}:${FUNC}: no such user`);
            return null;
        }
        let user = rows[0]
        delete user.heslo
        return user
    } catch (err) {
        console.error(`${FILE}:${FUNC}: error`, err);
        throw new Error ('could not read user');
    } finally {
        closeConnection(conn)
    }
}

exports.login = login
exports.getUser = getUser