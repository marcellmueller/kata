const squareCode = function (message) {
	let newMessage = removeSpaces(message);
	let charsPerLine = Math.ceil(Math.sqrt(newMessage.length));
	let square = [];
	let letterCount = 0;
	let encodedString = "";
	//break up message into chunks and push to array
	for (let i = 0; i < charsPerLine; i++) {
		let line = "";
		for (let y = 0; y < charsPerLine; y++) {
			if (newMessage[letterCount] === undefined) {
				line += " ";
			} else {
				line += newMessage[letterCount];
				letterCount++;
			}
		}
		square.push(line);
		line = "";
	}

	//secret square code
	for (let i = 0; i < charsPerLine; i++) {
		for (let y = 0; y < charsPerLine; y++) {
			encodedString += square[y][i];
		}
		encodedString += " ";
	}
	return encodedString;
};

let removeSpaces = (message) => {
	let noSpaces = "";
	for (let i = 0; i < message.length; i++) {
		message[i] !== " " ? (noSpaces += message[i]) : null;
	}
	return noSpaces;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
	squareCode(
		"if man was meant to stay on the ground god would have given us roots"
	)
);
