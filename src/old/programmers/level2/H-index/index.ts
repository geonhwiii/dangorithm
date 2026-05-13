export function solution(citations: number[]) {
	let hIndex = 0;
	for (let i = 1; i <= citations.length; i++) {
		const filtered = citations.filter((n) => n > hIndex).length;
		if (filtered > hIndex) {
			hIndex = i;
		}
	}
	return hIndex;
}
