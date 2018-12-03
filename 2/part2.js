const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'input.txt');

fs.readFile(INPUT, (err, data) => {
	// Cancel for err
	if (err) console.error(err);

	// Get data
	const ids = data.toString().split('\n');

	// Find the two similar ids
	let similarIds = [];
	for (let i = 0; i < ids.length; i++) {
		const comparer = ids[i];
		const comparerLetters = comparer.split('');
		for (let i2 = 0; i2 < ids.length; i2++) {
			if (i != i2) {
				const comparee = ids[i2];
				const compareeLetters = comparee.split('');
				const comparison = [];
				for (let letterIndex = 0; letterIndex < comparerLetters.length; letterIndex++) {
					const l1 = comparerLetters[letterIndex];
					const l2 = compareeLetters[letterIndex];
					comparison[letterIndex] = l1 === l2;
				}
				let fCount = 0;
				for (let y = 0; y < comparison.length; y++) {
					const c = comparison[y];
					if (fCount < 2) {
						if (!c) fCount += 1;
					}
				}
				if (fCount < 2) {
					similarIds[0] = comparer;
					similarIds[1] = comparee;
				}
			}
		}
	}

	// Remove the different letter
	const id1 = similarIds[0];
	const id2 = similarIds[1];
	let solution = '';
	for (let i = 0; i < id1.length; i++) {
		const l1 = id1[i];
		const l2 = id2[i];
		if (l1 === l2) {
			solution += l1;
		}
	}

	// Log the solution
	console.log({ solution });
});
