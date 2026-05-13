export function solution(board: number[][], moves: number[]) {
	const stack = [];
	let count = 0;
	for (const move of moves) {
		const index = move - 1;
		for (const row of board) {
			if (row[index] === 0) continue;
			stack.push(row[index]);
			row[index] = 0;
			if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
				stack.pop();
				stack.pop();
				count += 2;
			}
			break;
		}
	}
	return count;
}
