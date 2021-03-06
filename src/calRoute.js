/** @format */

const express = require('express');
const router = express.Router();
const { add, sub, mul, div } = require('./calController');
const { type, range1, range2 } = require('./authController');

router.get('/', (req, res) => {
	// res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.send('Hello world!');
});
router.post('/add', type, range1, add);
router.post('/sub', type, sub);
router.post('/multiply', type, range1, mul);
router.post('/divide', div);

module.exports = router;
