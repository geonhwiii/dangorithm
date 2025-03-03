export function solution(today: string, terms: string[], privacies: string[]) {
	const result: number[] = [];
	const now = dateToDay(today);
	const termsMap = new Map();

	for (const term of terms) {
		const [type, duration] = term.split(' ');
		termsMap.set(type, Number(duration));
	}

	privacies.forEach((privacy, index) => {
		const [date, type] = privacy.split(' ');
		if (dateToDay(date) + termsMap.get(type) * 28 <= now) {
			result.push(index + 1);
		}
	});

	return result;
}

function dateToDay(date: string) {
	const dateArray = date.split('.');
	const day = Number(dateArray[0]) * 28 * 12 + Number(dateArray[1]) * 28 + Number(dateArray[2]);
	return day;
}
