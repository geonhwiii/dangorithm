class Queue {
	list: number[] = [];
	front = 0;
	rear = 0;
	push(item: number) {
		this.list[this.rear++] = item;
	}
	pop() {
		return this.list[this.front++];
	}
	size() {
		return this.rear - this.front;
	}
}

export function solution(progresses: number[], speeds: number[]) {
	const queue = new Queue();
	const result = [];
	let temp: number[] = [];
	progresses.forEach((progress, index) => {
		const date = Math.ceil((100 - progress) / speeds[index]);
		queue.push(date);
	});
	while (queue.size() > 0) {
		const front = queue.pop();
		if (!temp.length) {
			temp.push(front);
		} else {
			const value = temp[0];
			if (value >= front) {
				temp.push(front);
			} else {
				result.push(temp.length);
				temp = [front];
			}
		}
	}
	result.push(temp.length);
	return result;
}
