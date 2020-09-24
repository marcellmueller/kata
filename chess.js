let whiteQueen = [1, 4];
let blackQueen = [5, 0];

let generateBoard = (whiteQueen, blackQueen) => {
	let board = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
	];
	board[whiteQueen[0]][whiteQueen[1]] = 1;
	board[blackQueen[0]][blackQueen[1]] = 1;
	return board;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);

let queenThreat = (generatedBoard) => {
	if (checkX(generatedBoard)) {
		console.log("X Axis Threat");
		return true;
	} else if (checkY(generatedBoard)) {
		console.log("Y Axis Threat");
		return true;
	} else if (checkDiagonal(generatedBoard)) {
		return true;
	} else {
		return false;
	}
};

let checkX = (generatedBoard) => {
	//checking the board for this horizontal match even though
	//we have global variables to check against like this:
	// whiteQueen[0] === blackQueen[0] ? matchIs = true : matchIs = false;
	let match = 0;
	let matchIs;
	for (let i = 0; i < generatedBoard.length; i++) {
		for (let y = 0; y < generatedBoard.length; y++) {
			generatedBoard[i][y] === 1 ? (match += 1) : null;
		}
		if (match === 2) {
			matchIs = true;
		} else {
			match = 0;
		}
	}
	return matchIs;
};

let checkY = (generatedBoard) => {
	//checking the board for this horizontal match even though
	//we have global variables to check against like this:
	// whiteQueen[1] === blackQueen[1] ? matchIs = true : matchIs = false;
	let match = 0;
	let matchIs;
	for (let i = 0; i < generatedBoard.length; i++) {
		for (let y = 0; y < generatedBoard.length; y++) {
			generatedBoard[y][i] === 1 ? (match += 1) : null;
		}
		if (match === 2) {
			matchIs = true;
		} else {
			match = 0;
		}
	}
	return matchIs;
};

let checkDiagonal = (generatedBoard) => {
	//get location off board...not using the global variables
	//or else the board would be useless
	let locations = [];
	for (let i = 0; i < generatedBoard.length; i++) {
		for (let j = 0; j < generatedBoard.length; j++) {
			if (generatedBoard[i][j] === 1) {
				locations.push(i, j);
			}
		}
	}

	//check diagonal attack
	let row = locations[0] - locations[2];
	let column = locations[1] - locations[3];
	//convert to absolute number
	row < 0 ? (row *= -1) : 0;
	column < 0 ? (column *= -1) : 0;
	if (row === column) {
		return true;
	} else {
		return false;
	}
};
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
