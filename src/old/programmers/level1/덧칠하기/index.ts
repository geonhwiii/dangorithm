export function solution(n: number, m: number, section: number[]) {
	let lastPaint = 0;
	let count = 0;
	for (let i = 0; i < section.length; i++) {
		if (section[i] > lastPaint) {
			count++;
			lastPaint = section[i] + m - 1;
		}
	}
	return count;
}
