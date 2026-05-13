export function solution(want: string[], number: number[], discount: string[]) {
	const wantMap = new Map();
	want.forEach((item, index) => wantMap.set(item, number[index]));
	let answer = 0;
	for (let i = 0; i <= discount.length - 10; i++) {
		const currentWantMap = new Map(wantMap);
		const currentWindow = discount.slice(i, i + 10);
		currentWindow.forEach((item) => {
			if (currentWantMap.has(item)) {
				const count = currentWantMap.get(item);
				if (count > 0) {
					currentWantMap.set(item, count - 1);
				}
			}
		});
		const satisfied = [...currentWantMap.values()].every((count) => count === 0);
		if (satisfied) {
			answer++;
		}
	}
	return answer;
}
