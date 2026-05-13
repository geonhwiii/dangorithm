export function solution(priorities: number[], location: number) {
	let count = 0;
	const queue = priorities.map((priority, index) => ({ priority, index }));
	while (queue.length > 0) {
		const target = queue.shift();
		const max = Math.max(...queue.map((item) => item.priority));
		if (!target) continue;
		if (target.priority < max) {
			queue.push(target);
		} else {
			count++;
			if (target.index === location) {
				return count;
			}
		}
	}
	return count;
}
