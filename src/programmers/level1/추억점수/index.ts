export function solution(
	name: string[],
	yearning: number[],
	photo: string[][],
) {
	const scoreMap = new Map();
	name.forEach((name, index) => scoreMap.set(name, yearning[index]));
	const result = photo.map((item) => {
		return item
			.map((name) => scoreMap.get(name))
			.filter((score) => score !== undefined)
			.reduce((acc, cur) => acc + cur, 0);
	});
	return result;
}
