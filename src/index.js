const express = require('express')
const { router } = require('./router/router')
const dotenv = require('dotenv')
let session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);

const app = express()

const port = 3000

let mySqlStoreOptions = {
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
};

let sessionStore = new MySQLStore(mySqlStoreOptions);

app.use(session({
	key: 'session_cookie_name',
	secret: 'toto je heslo',
	store: sessionStore,
	resave: false,
	saveUninitialized: true
}));

function trackClicks (req, res, next) {
    if (!req.session) {
      next();
      return;
    }
    if (!req.session.countOfRequests) {
      req.session.countOfRequests = 0;
    }
    req.session.countOfRequests = req.session.countOfRequests + 1;
    console.log(`count of requests: ${req.session.countOfRequests}`)
    next();
  }
app.use(trackClicks);

app.use(express.static('public'))
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
