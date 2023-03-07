const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.json({message: 'Hello from /api !'});
})

router.post('/', function (req, res) {
  res.json({message: 'Hello from /api !'});
})

exports.router = router;