export function solution(scoville: number[], K: number) {
	const heap = new Heap();
	let count = 0;

	for (const value of scoville) {
		heap.push(value);
	}

	while (heap.size() >= 2 && heap.peak()! < K) {
		const first = heap.pop()!;
		const second = heap.pop()!;
		const nextScoville = first + second * 2;
		heap.push(nextScoville);
		count++;
	}

	return heap.peak()! < K ? -1 : count;
}

class Heap {
	private heap: number[] = [];

	push(value: number) {
		this.heap.push(value);
		this.heap.sort((a, b) => a - b);
	}

	pop(): number | undefined {
		return this.heap.shift();
	}

	peak(): number | undefined {
		return this.heap[0];
	}

	size(): number {
		return this.heap.length;
	}
}
