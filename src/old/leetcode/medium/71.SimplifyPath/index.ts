export function simplifyPath(path: string): string {
	const splitted = path.split('/').filter((v) => v.length > 0);
	const stack: string[] = [];

	for (const part of splitted) {
		if (part === '..') {
			if (stack.length > 0) {
				stack.pop();
			}
		} else if (part !== '.') {
			stack.push(part);
		}
	}

	return `/${stack.join('/')}`;
}
