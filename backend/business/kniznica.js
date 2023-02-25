const { getConnection } = require('../db')
const { v4: uuidv4 } = require('uuid')
const { closeConnection } = require('../db')

async function kniznicaCreate(meno, popis) {
    let conn
    try {
        conn = await getConnection()
        let id = uuidv4()
        await conn.query(
            'insert into kniznica(id, meno, popis) values(?, ?, ?)',
            [id, meno, popis]
        )
    } finally {
        closeConnection(conn)
    }
}

async function kniznicaUpdate(id, meno, popis) {
    let conn
    try {
        conn = await getConnection()
        let result = await conn.query(
            'update kniznica  set meno = ?,  popis =  ?  where id = ?',
            [meno, popis, id]
        )
    } finally {
        closeConnection(conn)
    }
}

async function kniznicaGet(id) {
    let conn
    try {
        conn = await getConnection()
        let rows = await conn.query('select * from kniznica where id = ?', [id])
        if (rows.length > 0) {
            return rows[0]
        } else {
            return null
        }
    } finally {
        closeConnection(conn)
    }
}

async function kniznicaGetAll() {
    let conn
    try {
        conn = await getConnection()
        let rows = await conn.query('select * from kniznica', [])
        return rows
    } finally {
        closeConnection(conn)
    }
}

async function kniznicaAddStudent(kniznicaId, studentId) {
    let conn
    try {
        conn = await getConnection()
        let id = uuidv4()
        await conn.query(
            'insert into kniznica_student(id, kniznica_id, student_id) values(?, ?, ?)',
            [id, kniznicaId, studentId]
        )
    } finally {
        closeConnection(conn)
    }
}

async function kniznicaGetAllStudents(kniznicaId) {
    let conn
    try {
        conn = await getConnection()
        let rows = await conn.query(
            'select s.*  from  kniznica_student  ks join student s  on s.id =  ks.student_id where ks.kniznica_id = ?;',
            [kniznicaId]
        )
        return rows
    } finally {
        closeConnection(conn)
    }
}

exports.kniznicaCreate = kniznicaCreate
exports.kniznicaGet = kniznicaGet
exports.kniznicaUpdate = kniznicaUpdate
exports.kniznicaGetAll = kniznicaGetAll
exports.kniznicaAddStudent = kniznicaAddStudent
exports.kniznicaGetAllStudents = kniznicaGetAllStudents
