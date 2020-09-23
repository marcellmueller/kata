const calculateChange = (total, cash) => {
	let change = cash - total;
	let newChange = 0;

	let returnChange = [];

	switch (true) {
		case change / 2000 > 1: {
			newChange = change / 2000;
			let twentyDollar = Math.trunc(newChange);
			change = change - twentyDollar * 2000;
			twentyDollar > 0 ? returnChange.push("twentyDollar: " + twentyDollar) : 0;
		}
		case change / 1000 > 1: {
			newChange = change / 1000;
			let tenDollar = Math.trunc(newChange);
			change = change - tenDollar * 1000;
			tenDollar > 0 ? returnChange.push("tenDollar: " + tenDollar) : 0;
		}
		case change / 500 > 1: {
			newChange = change / 500;
			let fiveDollar = Math.trunc(newChange);
			change = change - fiveDollar * 500;
			fiveDollar > 0 ? returnChange.push("fiveDollar: " + fiveDollar) : 0;
		}
		case change / 200 > 1: {
			newChange = change / 200;
			let twoDollar = Math.trunc(newChange);
			change = change - twoDollar * 200;
			twoDollar > 0 ? returnChange.push("twoDollar: " + twoDollar) : 0;
		}
		case change / 100 > 1: {
			newChange = change / 100;
			let oneDollar = Math.trunc(newChange);
			change = change - oneDollar * 100;
			oneDollar > 0 ? returnChange.push("oneDollar: " + oneDollar) : 0;
		}
		case change / 25 > 1: {
			newChange = change / 25;
			let quarter = Math.trunc(newChange);
			change = change - quarter * 25;
			quarter > 0 ? returnChange.push("quarter: " + quarter) : 0;
		}
		case change / 10 > 1: {
			newChange = change / 10;
			let dime = Math.trunc(newChange);
			change = change - dime * 10;
			dime > 0 ? returnChange.push("dime: " + dime) : 0;
		}
		case change / 5 > 1: {
			newChange = change / 5;
			let nickel = Math.trunc(newChange);
			change = change - nickel * 5;
			nickel > 0 ? returnChange.push("nickel: " + nickel) : 0;
		}
		case change / 1 > 1: {
			newChange = change / 1;
			let penny = Math.trunc(newChange);
			change = change - penny * 1;
			penny > 0 ? returnChange.push("penny: " + penny) : 0;
		}
	}
	return returnChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
