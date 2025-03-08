const YES = 'Yes';
const NO = 'No';

class Queue {
	list: string[] = [];
	front = 0;
	rear = 0;

	constructor(list: string[]) {
		this.list = list;
		this.rear = list.length;
	}

	push(item: string) {
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

export function solution(cards1: string[], cards2: string[], goal: string[]) {
	const card1Queue = new Queue(cards1);
	const card2Queue = new Queue(cards2);
	const goalQueue = new Queue(goal);

	while (goalQueue.size() > 0) {
		const word = goalQueue.pop();
		if (word === card1Queue.list[card1Queue.front]) {
			card1Queue.pop();
		} else if (word === card2Queue.list[card2Queue.front]) {
			card2Queue.pop();
		} else {
			return NO;
		}
	}
	return YES;
}

function solution2(cards1: string[], cards2: string[], goal: string[]) {
	let cards1Index = 0;
	let cards2Index = 0;
	for (const word of goal) {
		if (word === cards1[cards1Index]) {
			cards1Index++;
			continue;
		}
		if (word === cards2[cards2Index]) {
			cards2Index++;
			continue;
		}
		return 'No';
	}
	return 'Yes';
}
