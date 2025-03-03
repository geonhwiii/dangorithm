const TRUE = 1;
const FALSE = 0;

export function solution(s: string) {
	const stack: string[] = [];
	for (let i = 0; i <= s.length - 1; i++) {
		const curr = s[i];
		if (!stack.length) {
			stack.push(curr);
			continue;
		}
		const prev = stack[stack.length - 1];
		if (prev === curr) {
			stack.pop();
		} else {
			stack.push(curr);
		}
	}
	return stack.length === 0 ? TRUE : FALSE;
}
