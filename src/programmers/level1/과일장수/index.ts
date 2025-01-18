export function solution(k: number, m: number, score: number[]) {
	const sortedBox = score.sort((a, b) => b - a);
	let result = 0;
	for (let i = 0; i <= sortedBox.length; i += m) {
		const slicedBox = sortedBox.slice(i, i + m);
		if (slicedBox.length === m) {
			const min = Math.min(...slicedBox);
			result += min * m;
		}
	}
	return result;
}
