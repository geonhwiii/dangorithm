export function solution(number: number, limit: number, power: number) {
	return Array.from({ length: number }, (_, i) => {
		const count = getCount(i + 1);
		return count > limit ? power : count;
	}).reduce((acc, cur) => acc + cur, 0);
}

function getCount(n: number): number {
	let count = 0;
	const sqrt = Math.sqrt(n);
	for (let i = 1; i <= sqrt; i++) {
		if (n % i === 0) {
			count++;
			if (i !== n / i) {
				count++;
			}
		}
	}
	return count;
}
