export function solution(answers: number[]) {
	const result = new Map<number, number>();
	const patterns = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];
	patterns.forEach((pattern, index) => {
		let count = 0;
		for (let i = 0; i < answers.length; i++) {
			if (answers[i] === pattern[i % pattern.length]) {
				count++;
			}
		}
		result.set(index + 1, count);
	});
	const maxScore = Math.max(...result.values());
	return result
		.entries()
		.filter(([_, value]) => value === maxScore)
		.map(([key]) => +key)
		.toArray();
}
