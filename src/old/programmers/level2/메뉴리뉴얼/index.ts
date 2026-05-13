export function solution(orders: string[], course: number[]) {
	const answer: string[] = [];
	for (const count of course) {
		const courseMap = new Map();
		orders.map((order) => {
			const orderList = order.split('');
			const combi = combinations(orderList, count);
			combi.forEach((c) => {
				courseMap.set(c, (courseMap.get(c) || 0) + 1);
			});
		});
		const max = Math.max(...courseMap.values());
		if (max >= 2) {
			courseMap.forEach((value, key) => {
				if (value === max) {
					answer.push(key);
				}
			});
		}
	}
	return answer.sort();
}

function combinations(arr: string[], n: number): string[] {
	const results: string[] = [];
	if (n === 1) return arr;
	arr.forEach((item, index, origin) => {
		const rest = origin.slice(index + 1);
		const combi = combinations(rest, n - 1);
		const combination = combi.map((combination) => (item + combination).split('').sort().join(''));
		results.push(...combination);
	});
	return results;
}
