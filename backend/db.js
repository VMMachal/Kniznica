const mariadb = require('mariadb');
const dotenv = require('dotenv');
dotenv.config();
const pool = mariadb.createPool({port: process.env.DATABASE_PORT, host: process.env.DATABASE_HOST, user: process.env.DATABASE_USER, password: process.env.DATABASE_PASSWORD, database: process.env.DATABASE_NAME, connectionLimit: 5});

async function createAndQuery() {
  let conn;
 try {
    console.log('@@@@@@@@@@@@@@@@@@@ cp100');
    console.log(`port: ${process.env.DATABASE_PORT}`);
    console.log(`host: ${process.env.DATABASE_HOST}`);
    console.log(`user: ${process.env.DATABASE_USER}`);
    console.log(`user: ${process.env.DATABASE_NAME}`);
	conn = await pool.getConnection();
    console.log('@@@@@@@@@@@@@@@@@@@ cp200');
	const rows = await conn.query("SELECT 1 as val");
	// rows: [ {val: 1}, meta: ... ]
    let menoKniznice = 'kniznica a';
    let idKniznice = '7991c1be-cb43-43bc-a389-210bf4aef8e0';
	//const res = await conn.query("select * from kniznica where meno = ? and id = ?", [menoKniznice, idKniznice]);
    const res = await conn.query("select * from kniznica", []);
    console.dir(res);
	// res: { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } finally {
	if (conn) conn.release(); //release to pool
  }
}

function foo() {
    console.log('hello foo');
}

exports.createAndQuery = createAndQuery;
exports.foo = foo;
