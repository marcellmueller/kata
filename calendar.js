const getMonth = (date) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let monthNum = date[5] + date[6];
	return months[monthNum - 1];
};

const getYear = (date) => {
	return date[0] + date[1] + date[2] + date[3];
};

const ordinal = (date) => {
	let day = date[8] + date[9];
	if (day[0] === "0") {
		day = day[1];
	}
	//adds th at the end for the teens
	if (day.length === 2 && day[1] === "1") {
		day += "th";
	} else if (day[day.length - 1] === "1") {
		day += "st";
	} else if (day[day.length - 1] === "2") {
		day += "nd";
	} else if (day[day.length - 1] === "3") {
		day += "rd";
	} else if (
		day[day.length - 1] === "4" ||
		"5" ||
		"6" ||
		"7" ||
		"8" ||
		"9" ||
		"0"
	) {
		day += "th";
	}
	return day;
};

const talkingCalendar = (date) => {
	return getMonth(date) + " " + ordinal(date) + ", " + getYear(date);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
