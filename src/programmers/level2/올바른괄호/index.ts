export function solution(s: string): boolean {
	const openCount = s.split('').filter((char) => char === '(').length;
	const closeCount = s.split('').filter((char) => char === ')').length;
	if (openCount !== closeCount) return false;
	const stack: string[] = [];
	for (const char of s) {
		if (char === '(') {
			stack.push(char);
		} else {
			if (stack.length === 0) return false;
			stack.pop();
		}
	}
	return stack.length === 0;
}
