const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'input.txt');

fs.readFile(INPUT, (err, data) => {
	// Cancel for err
	if (err) console.error(err);

	// Get data
	const dataArr = data.toString().split('\n');
	const numbersArr = dataArr.map(str => {
		const tmp = Number(str);
		if (typeof tmp != 'number') {
			console.error('NOT A NUMBER');
		}
		return tmp;
	});

	let pastTotals = {};
	let found = false;
	let sum = 0;
	while (!found) {
		sum = numbersArr.reduce((total, curr) => {
			if (found) return total;
			const newTotal = total + curr;
			if (pastTotals.hasOwnProperty(newTotal)) {
				console.log(`Found ${newTotal} twice!`);
				found = true;
			} else {
				pastTotals[newTotal] = 1;
			}
			return newTotal;
		}, sum);
	}
});
