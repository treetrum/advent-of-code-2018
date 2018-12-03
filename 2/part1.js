const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'input.txt');

fs.readFile(INPUT, (err, data) => {
	// Cancel for err
	if (err) console.error(err);

	// Get data
	const ids = data.toString().split('\n');

	const counts = {
		two: 0,
		three: 0
	};

	ids.forEach(id => {
		const letters = id.split('');
		const letterMap = {};
		letters.forEach(letter => {
			if (letterMap.hasOwnProperty(letter)) {
				letterMap[letter] = letterMap[letter] + 1;
			} else {
				letterMap[letter] = 1;
			}
		});
		let twoCounted = false;
		let threeCounted = false;
		Object.keys(letterMap).forEach(key => {
			const count = letterMap[key];
			switch (count) {
				case 2:
					if (!twoCounted) {
						counts.two += 1;
						twoCounted = true;
					}
					break;
				case 3:
					if (!threeCounted) {
						counts.three += 1;
						threeCounted = true;
					}
					break;
				default:
					break;
			}
		});
	});

	console.log(counts);
	console.log(`Checksum: ${counts.two * counts.three}`);
});
