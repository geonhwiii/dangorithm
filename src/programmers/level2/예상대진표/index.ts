export function solution(n: number, a: number, b: number) {
	let count = 0;
	while (a !== b) {
		a = Math.ceil(a / 2);
		b = Math.ceil(b / 2);
		count++;
	}
	return count;
}
