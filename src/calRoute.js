/** @format */

const express = require('express');
const router = express.Router();
const { add, sub, mul, div } = require('./calController');
const { type, range1, range2 } = require('./authController');

router.get('/', (req, res) => {
	const obj = { message: 'Hello world!' };
	return res.send(JSON.parse(obj));
});
router.post('/add', type, range1, add);
router.post('/sub', type, range2, sub);
router.post('/multiply', type, range1, mul);
router.post('/divide', div);

module.exports = router;
