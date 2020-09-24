const blocksAway = (directions) => {
	let direction = "start";
	let east = 0;
	let north = 0;

	for (let i = 0; i < directions.length; i += 2) {
		direction = changeDirection(direction, directions[i]);
		switch (true) {
			case direction === "north":
				north += directions[i + 1];
				break;
			case direction === "south":
				north -= directions[i + 1];
				break;
			case direction === "east":
				east += directions[i + 1];
				break;
			case direction === "west":
				east -= directions[i + 1];
				break;
		}
	}
	return { east: east, north: north };
};
let changeDirection = (direction, directions) => {
	switch (true) {
		case directions === "right" && direction === "start":
			direction = "east";
			break;
		case directions === "left" && direction === "start":
			direction = "north";
			break;
		case directions === "right" && direction === "north":
			direction = "east";
			break;
		case directions === "left" && direction === "north":
			direction = "west";
			break;
		case directions === "right" && direction === "east":
			direction = "south";
			break;
		case directions === "left" && direction === "east":
			direction = "north";
			break;
		case directions === "right" && direction === "west":
			direction = "north";
			break;
		case directions === "left" && direction === "west":
			direction = "south";
			break;
		case directions === "right" && direction === "south":
			direction = "west";
			break;
		case directions === "left" && direction === "south":
			direction = "east";
			break;
	}
	return direction;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
	blocksAway([
		"left",
		1,
		"right",
		1,
		"left",
		1,
		"right",
		1,
		"left",
		1,
		"right",
		1,
	])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
