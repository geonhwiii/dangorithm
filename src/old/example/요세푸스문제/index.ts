class Queue {
	list: number[] = [];
	front = 0;
	rear = 0;
	push(item: number) {
		this.list.push(item);
		this.rear++;
	}
	pop() {
		return this.list[this.front++];
	}
	size() {
		return this.rear - this.front;
	}
}

export function solution(n: number, k: number) {
	const queue = new Queue();
	for (let i = 1; i <= n; i++) {
		queue.push(i);
	}
	while (queue.size() > 1) {
		queue.push(queue.pop());
		queue.pop();
	}
	return queue.pop();
}

export function solution2(n: number, k: number) {
	const list = new Array(n).fill(Boolean).map((_, i) => i + 1);
	while (list.length > 1) {
		list.splice(k - 1, 1);
		const next = list.splice(0, k - 1);
		list.push(...next);
	}
	return list[0];
}
