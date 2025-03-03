export function solution(s: string) {
	let count = 0;
	let str = s;
	for (let i = 0; i < str.length; i++) {
		if (isValidBrackets(str)) {
			count++;
		}
		str = str.slice(1) + str[0];
	}
	return count;
}

function isValidBrackets(s: string): boolean {
	const stack: string[] = [];
	for (const char of s) {
		if (char === '(' || char === '{' || char === '[') {
			stack.push(char);
		} else {
			if (stack.length === 0) {
				return false;
			}
			const last = stack.pop();
			if (last && !checkValidChar(last, char)) {
				return false;
			}
		}
	}
	return stack.length === 0;
}

function checkValidChar(prev: string, next: string) {
	switch (prev) {
		case '(':
			return next === ')';
		case '{':
			return next === '}';
		case '[':
			return next === ']';
		default:
			return false;
	}
}
