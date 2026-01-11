export function evalRPN(tokens: string[]): number {
	let numStack: number[] = [];
	for (const token of tokens) {
		if (isNumber(token)) {
			numStack.push(Number(token));
			continue;
		}
		const num2 = numStack.pop()!;
		const num1 = numStack.pop()!;
		switch (token) {
			case '+':
				numStack.push(num1 + num2);
				break;
			case '-':
				numStack.push(num1 - num2);
				break;
			case '*':
				numStack.push(num1 * num2);
				break;
			case '/':
				numStack.push(Math.trunc(num1 / num2));
				break;
		}
	}
	return numStack.pop()!;
}

function isNumber(token: string): boolean {
	return token !== '+' && token !== '-' && token !== '*' && token !== '/';
}
