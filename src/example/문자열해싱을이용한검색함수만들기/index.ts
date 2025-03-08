function polynomialHash(str: string) {
	const p = 31;
	const m = 1000000007;
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash * p + str.charCodeAt(i)) % m;
	}
	return hash;
}

export function solution(stringList: string[], queryList: string[]) {
	const hashList = stringList.map(polynomialHash);
	return queryList.map((query) => hashList.includes(polynomialHash(query)));
}

function solution2(stringList: string[], queryList: string[]) {
	const stringSet = new Set(stringList);
	return queryList.map((query) => stringSet.has(query));
}
