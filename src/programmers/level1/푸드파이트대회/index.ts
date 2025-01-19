export function solution(food: number[]) {
	let result = "";
	for (let i = 1; i < food.length; i++) {
		const count = Math.floor(food[i] / 2);
		result += String(i).repeat(count);
	}
	return `${result}0${result.split("").reverse().join("")}`;
}
