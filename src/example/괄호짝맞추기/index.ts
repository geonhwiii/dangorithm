const OPEN = '(';

export function solution(s: string) {
	const stack = [];
	for (const char of s) {
		if (char === OPEN) {
			stack.push(OPEN);
		} else {
			if (stack.length === 0) {
				return false;
			}
			stack.pop();
		}
	}
	return stack.length === 0;
}
