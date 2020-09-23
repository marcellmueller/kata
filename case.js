const makeCase = (input, type) => {
	let word = input;
	let chooseCase = (input, type) => {
		if (type === "camel") {
			return camel(input);
		} else if (type === "pascal") {
			return pascal(input);
		} else if (type === "snake") {
			return snake(input);
		} else if (type === "kebab") {
			return kebab(input);
		} else if (type === "title") {
			return title(input);
		} else if (type === "vowel") {
			return vowel(input);
		} else if (type === "consonant") {
			return consonant(input);
		} else if (type === "upper") {
			return upper(input);
		} else if (type === "lower") {
			return lower(input);
		}
	};

	if (typeof type === "string") {
		return chooseCase(input, type);
	} else {
		for (let i = 0; i < type.length; i++) {
			if (i === 0) {
				word = chooseCase(input, type[i]);
			} else {
				word = chooseCase(word, type[i]);
			}
		}
	}
	return word;
};
const findCase = (letter) => {
	const lowerCase = "abcdefghijklmnopqrstuvwxyz ";
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	for (let i = 0; i < lowerCase.length; i++) {
		if (lowerCase[i] === letter) {
			return upperCase[i];
		}
	}
};

const findLower = (letter) => {
	const lowerCase = "abcdefghijklmnopqrstuvwxyz ";
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	for (let i = 0; i < upperCase.length; i++) {
		if (upperCase[i] === letter) {
			return lowerCase[i];
		}
	}
};

const camel = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (input[i] === " ") {
			outputString = outputString + findCase(input[i + 1]);
			i = i + 1;
		} else {
			outputString = outputString + input[i];
		}
	}
	return outputString;
};

let pascal = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (i === 0) {
			outputString = outputString + findCase(input[i]);
		} else if (input[i] === " ") {
			outputString = outputString + findCase(input[i + 1]);
			i = i + 1;
		} else {
			outputString = outputString + input[i];
		}
	}
	return outputString;
};

let snake = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (i === 0) {
			outputString = outputString + input[i];
		} else if (input[i] === " ") {
			outputString = outputString + "_";
		} else {
			outputString = outputString + input[i];
		}
	}
	return outputString;
};

let kebab = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (i === 0) {
			outputString = outputString + input[i];
		} else if (input[i] === " ") {
			outputString = outputString + "-";
		} else {
			outputString = outputString + input[i];
		}
	}
	return outputString;
};

let title = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (i === 0) {
			outputString = outputString + findCase(input[i]);
		} else if (input[i] === " ") {
			outputString = outputString + " " + findCase(input[i + 1]);
			i = i + 1;
		} else {
			outputString = outputString + input[i];
		}
	}
	return outputString;
};

let vowel = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (
			input[i] === "a" ||
			input[i] === "e" ||
			input[i] === "i" ||
			input[i] === "o" ||
			input[i] === "u"
		) {
			outputString = outputString + findCase(input[i]);
		} else {
			outputString = outputString + input[i];
		}
	}

	return outputString;
};

let consonant = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (
			input[i] === "a" ||
			input[i] === "e" ||
			input[i] === "i" ||
			input[i] === "o" ||
			input[i] === "u"
		) {
			outputString = outputString + input[i];
		} else {
			outputString = outputString + findCase(input[i]);
		}
	}

	return outputString;
};

let upper = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		outputString = outputString + findCase(input[i]);
	}
	return outputString;
};

let lower = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		outputString = outputString + findLower(input[i]);
	}
	return outputString;
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", "upper"));
// console.log(makeCase("THIS IS A STRING", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));
