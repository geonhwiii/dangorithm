type Node = {
	index: number;
	prev: Node | null;
	next: Node | null;
};

export function solution(n: number, k: number, cmds: string[]) {
	// 1. 연결리스트 생성
	const nodeList: Node[] = [];
	for (let i = 0; i < n; i++) {
		nodeList.push({ index: i, prev: null, next: null });
	}
	for (let i = 0; i < n; i++) {
		if (i > 0) nodeList[i].prev = nodeList[i - 1];
		if (i < n - 1) nodeList[i].next = nodeList[i + 1];
	}
	// 2. 변수 선언
	let current = nodeList[k];
	const deletedRows = new Set<number>();
	const stack: Node[] = [];

	// 3. 순회
	for (const cmd of cmds) {
		const [command, value] = cmd.split(' ');
		switch (command) {
			case 'U': {
				const steps = Number(value);
				for (let i = 0; i < steps; i++) {
					if (current.prev) current = current.prev;
				}
				break;
			}
			case 'D': {
				const steps = Number(value);
				for (let i = 0; i < steps; i++) {
					if (current.next) current = current.next;
				}
				break;
			}
			case 'C': {
				const prev = current.prev;
				const next = current.next;
				if (prev) prev.next = next;
				if (next) next.prev = prev;
				deletedRows.add(current.index);
				stack.push(current);
				if (next) {
					current = next;
				} else if (prev) {
					current = prev;
				}
				break;
			}
			case 'Z': {
				if (stack.length) {
					const restored = stack.pop()!;
					deletedRows.delete(restored.index);

					const prev = restored.prev;
					const next = restored.next;

					// 연결 복구
					if (prev) prev.next = restored;
					if (next) next.prev = restored;
				}
				break;
			}
		}
	}

	// 4. result
	const result = new Array(n).fill('O');
	deletedRows.forEach((index) => {
		result[index] = 'X';
	});

	return result.join('');
}

function solution2(n: number, k: number, cmds: string[]) {
	const stack = [];
	const list = new Array(n).fill(0).map((_, i) => i);
	let selectedIndex = k;
	for (const cmd of cmds) {
		const [command, value] = cmd.split(' ');
		switch (command) {
			case 'U': {
				selectedIndex -= Number(value);
				break;
			}
			case 'D': {
				selectedIndex += Number(value);
				break;
			}
			case 'C': {
				const deletedNumber = list[selectedIndex];
				list.splice(selectedIndex, 1);
				stack.push([selectedIndex, deletedNumber]);
				break;
			}
			case 'Z': {
				if (stack.length) {
					const [selectedIndex, deletedNumber] = stack.pop();
					list.splice(selectedIndex, 0, deletedNumber);
				}
				break;
			}
			default:
				break;
		}
	}
	const result = new Array(n)
		.fill(0)
		.map((_, i) => i)
		.map((i) => (list.includes(i) ? 'O' : 'X'));
	return result.join('');
}
