const whereCanIPark = (arr, type) => {
	let parkingCoords = [];
	//loop through each array within the array
	for (let i = 0; i < arr.length; i++) {
		//loop through each item in the sub array
		for (let y = 0; y < arr[i].length; y++) {
			//check for parking spot type and available spaces on each loop
			if (type === "regular" && arr[i][y] === "R") {
				parkingCoords[0] = y;
				parkingCoords[1] = i;
				return parkingCoords;
			} else if (type === "small" && (arr[i][y] === "S" || arr[i][y] === "R")) {
				parkingCoords[0] = y;
				parkingCoords[1] = i;
				return parkingCoords;
			} else if (
				type === "motorcycle" &&
				(arr[i][y] === "M" || arr[i][y] === "R" || arr[i][y] === "S")
			) {
				parkingCoords[0] = y;
				parkingCoords[1] = i;
				return parkingCoords;
			}
		}
	}
	//if loop doesn't find a match return false
	return false;
};

console.log(
	whereCanIPark(
		[
			// COLUMNS ARE X
			// 0    1    2    3    4    5
			["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
			["s", "M", "s", "S", "r", "M"], // 1
			["s", "M", "s", "S", "r", "m"], // 2
			["S", "r", "s", "m", "r", "M"], // 3
			["S", "r", "s", "m", "r", "M"], // 4
			["S", "r", "S", "M", "M", "S"], // 5
		],
		"regular"
	)
);

console.log(
	whereCanIPark(
		[
			["M", "M", "M", "M"],
			["M", "s", "M", "M"],
			["M", "M", "M", "M"],
			["M", "M", "r", "M"],
		],
		"small"
	)
);

console.log(
	whereCanIPark(
		[
			["s", "s", "s", "s", "s", "s"],
			["s", "m", "s", "S", "r", "s"],
			["s", "m", "s", "S", "r", "s"],
			["S", "r", "s", "m", "r", "s"],
			["S", "r", "s", "m", "R", "s"],
			["S", "r", "S", "M", "m", "S"],
		],
		"motorcycle"
	)
);
