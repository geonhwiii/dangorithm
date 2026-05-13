export function hIndex(citations: number[]): number {
	let maxH = 0;
	for (let h = 0; h <= citations.length; h++) {
		const hCount = citations.filter((n) => n >= h).length;
		if (hCount >= h) {
			maxH = Math.max(maxH, h);
		}
	}
	return maxH;
}
