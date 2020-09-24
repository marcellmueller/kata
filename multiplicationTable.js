const multiplicationTable = (maxValue) => {
	let returnedValues = "";
	for (let i = 1; i <= maxValue; i++) {
		for (let x = 1; x <= maxValue; x++) {
			if (x % maxValue === 0) {
				returnedValues = returnedValues + i * x + "\n";
			} else {
				returnedValues = returnedValues + i * x + " ";
			}
		}
	}

	return returnedValues;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
