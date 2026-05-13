export class MinStack {
	private stack: number[] = [];
	private minStack: number[] = [];
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val: number): void {
		this.stack.push(val);

		if (this.minStack.length === 0) {
			this.minStack.push(val);
		} else {
			const currentMin = this.minStack.at(-1)!;
			this.minStack.push(Math.min(val, currentMin));
		}
	}

	pop(): void {
		this.stack.pop();
		this.minStack.pop();
	}

	top(): number {
		return this.stack?.at(-1)!;
	}

	getMin(): number {
		return this.minStack.at(-1)!;
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
