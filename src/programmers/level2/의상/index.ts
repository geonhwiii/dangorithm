export function solution(clothes: string[][]) {
	const clothMap = new Map();
	for (const [name, kind] of clothes) {
		const prevName = clothMap.get(kind);
		if (!prevName) {
			clothMap.set(kind, [name]);
		} else {
			clothMap.set(kind, [...prevName, name]);
		}
	}

	let result = 1;
	for (const [_, value] of clothMap) {
		result *= value.length + 1;
	}

	return result - 1;
}
