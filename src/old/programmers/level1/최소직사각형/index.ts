export function solution(sizes: number[][]) {
	const sortedSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));
	const maxWidth = Math.max(...sortedSizes.map(([w, h]) => w));
	const maxHeight = Math.max(...sortedSizes.map(([w, h]) => h));
	return maxWidth * maxHeight;
}
