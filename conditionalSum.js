const conditionalSum = (values, condition) => {
	let sum = 0;
	if (condition === "even") {
		for (let i = 0; i < values.length; i++) {
			if (values[i] % 2 === 0) {
				sum = sum + values[i];
			}
		}
	} else if (condition === "odd") {
		for (let i = 0; i < values.length; i++) {
			if (values[i] % 2 !== 0) {
				sum = sum + values[i];
			}
		}
	}
	return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
