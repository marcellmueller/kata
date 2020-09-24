const repeatNumbers = (arr) => {
	let outputString = "";
	for (let i = 0; i < arr.length; i++) {
		for (let y = 0; y < arr[i][1]; y++) {
			outputString = outputString + arr[i][0];
		}
		if (arr.length > 1 && i !== arr.length - 1) {
			outputString = outputString + ", ";
		}
	}
	return outputString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
	repeatNumbers([
		[1, 2],
		[2, 3],
	])
);
console.log(
	repeatNumbers([
		[10, 4],
		[34, 6],
		[92, 2],
	])
);
