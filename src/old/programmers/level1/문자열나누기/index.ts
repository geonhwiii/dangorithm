export function solution(s: string) {
	let first = s[0];
	let sameCount = 1;
	let diffCount = 0;
	let result = 0;
	for (let i = 1; i < s.length - 1; i++) {
		if (s[i] === first) {
			sameCount++;
		} else {
			diffCount++;
		}
		if (sameCount === diffCount) {
			result++;
			first = s[i + 1];
			sameCount = 0;
			diffCount = 0;
		}
	}
	return result + 1;
}
