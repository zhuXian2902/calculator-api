/** @format */

exports.add = (req, res) => {
	const { num1, num2 } = req.body;
	let sum = num1 + num2;
	if (sum > 1000000) {
		return res.json({
			status: 'error',
			message: 'Overflow',
		});
	}
	res.status(200).json({
		status: 'success',
		message: 'the sum of given two numbers',
		sum,
	});
};

exports.sub = (req, res) => {
	const { num1, num2 } = req.body;
	const sum = num1 - num2;
	if (sum < 1000000) {
		return res.json({
			status: 'error',
			message: 'Underflow',
		});
	}
	res.status(200).json({
		status: 'success',
		message: 'the difference of given two numbers',
		sum,
	});
};

exports.mul = (req, res) => {
	const { num1, num2 } = req.body;
	const sum = num1 * num2;
	res.status(200).json({
		status: 'success',
		message: 'The product of given numbers',
		sum,
	});
};

exports.div = (req, res) => {
	const { num1, num2 } = req.body;
	if (num2 === 0) {
		return res.json({
			status: 'error',
			message: 'Cannot divide by zero',
		});
	}
	const result = num1 / num2;
	res.json({
		status: `success`,
		message: `The division of given numbers`,
		result,
	});
};
