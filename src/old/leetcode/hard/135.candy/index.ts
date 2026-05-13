export function candy(ratings: number[]): number {
	const n = ratings.length;
	const candyArray = Array.from({ length: n }, () => 1);

	for (let i = 1; i < n; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candyArray[i] = candyArray[i - 1] + 1;
		}
	}

	for (let i = n - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1]) {
			candyArray[i] = Math.max(candyArray[i], candyArray[i + 1] + 1);
		}
	}

	return candyArray.reduce((acc, curr) => acc + curr, 0);
}
