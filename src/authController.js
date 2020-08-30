/** @format */

exports.range2 = (req, res, next) => {
	const { num1, num2 } = req.body;
	if (num1 <= 1000000 || num2 <= 1000000) {
		return res.json({
			status: 'error',
			message: 'Underflow',
		});
	}
	next();
};

exports.range1 = (req, res, next) => {
	const { num1, num2 } = req.body;
	if (num1 > 1000000 && num2 > 1000000) {
		return res.json({
			status: 'error',
			message: 'Overflow',
		});
	}
	next();
};

exports.type = (req, res, next) => {
	const { num1, num2 } = req.body;
	if (typeof num1 === 'string' || typeof num2 === 'string') {
		return res.json({
			status: 'error',
			message: 'invalid data types',
		});
	}
	next();
};
