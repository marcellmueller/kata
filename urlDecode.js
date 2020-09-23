const urlDecode = function (text) {
	let keyName = "";
	let value = "";
	let element = "keyName";
	let decoded = {};
	for (let i = 0; i < text.length; i++) {
		if (chars(text[i])) {
			element === "keyName" ? (keyName += text[i]) : null;
			element === "value" ? (value += text[i]) : null;
		} else if (text[i] === "=") {
			element = "value";
		} else if (text[i] === "&") {
			decoded[keyName] = value;
			keyName = "";
			value = "";
			element = "keyName";
		} else if (text[i] === "%") {
			value += " ";
		}
	}
	keyName !== "" ? (decoded[keyName] = value) : null;

	return decoded;
};

//check if each letter/char is in the list since I am trying to do this
//without using methods like split
let chars = (i) => {
	let charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let isChar;
	for (let j = 0; j < charList.length; j++) {
		isChar = false;
		if (i === charList[j]) {
			isChar = true;
			break;
		}
	}
	return isChar;
};
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
