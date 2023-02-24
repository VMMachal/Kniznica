const { getConnection } = require('../db.js');
const { v4: uuidv4} = require('uuid');
const { closeConnection } = require('../db.js');

async function kniznicaCreate(meno, popis){
    let conn
    try {
        conn = await getConnection();
        let uid = uuidv4();
        await conn.query('insert into kniznica(id, meno, popis) values(?, ?, ?)', [uid, meno, popis]);

    } finally {
        closeConnection(conn)
    }
}

async function kniznicaUpdate(id, meno, popis){
    let conn
    try {
        conn = await getConnection();
        console.log(id);
        let result = await conn.query('update kniznica  set meno = ?,  popis =  ?  where id = ?', [meno, popis, id]);
        console.dir(result);


    } finally {
        closeConnection(conn)
    }
}

async function kniznicaGet (id){
    let conn
    try {
        conn = await getConnection();
        let uid = uuidv4();
        let rows = await conn.query('select * from kniznica where id = ?', [id]);
        if (rows.length > 0) {
            return rows[0];
        }
        else {
           return null;
        }
    } finally {
        closeConnection(conn)
    }
}

async function kniznicaGetAll (){
    let conn
    try {
        conn = await getConnection();
        let uid = uuidv4();
        let rows = await conn.query('select * from kniznica', []);
        return rows;
        
    } finally {
        closeConnection(conn)
    }
}


exports.kniznicaCreate = kniznicaCreate;
exports.kniznicaGet = kniznicaGet;
exports.kniznicaUpdate = kniznicaUpdate;
exports.kniznicaGetAll = kniznicaGetAll;