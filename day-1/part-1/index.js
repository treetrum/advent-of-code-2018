const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'input.txt');

fs.readFile(INPUT, (err, data) => {
	if (err) console.error(err);
	const dataArr = data.toString().split('\n');
	const numbersArr = dataArr.map(str => {
		const tmp = Number(str);
		if (typeof tmp != 'number') {
			console.error('NOT A NUMBER');
		}
		return tmp;
	});
	const sum = numbersArr.reduce((total, curr) => {
		return total + curr;
	}, 0);
	console.log(sum);
});
