export function isSubsequence(s: string, t: string): boolean {
	let count = 0;
	for (const char of t) {
		if (s[count] === char) {
			count++;
		}
	}
	return count === s.length;
}
