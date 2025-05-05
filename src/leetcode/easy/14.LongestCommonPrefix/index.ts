export function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0 || strs[0].length === 0) {
		return '';
	}
	let commonPrefix = '';
	const firstString = strs[0];
	for (let i = 0; i < firstString.length; i++) {
		const currentChar = firstString[i];
		for (let j = 1; j < strs.length; j++) {
			if (i >= strs[j].length || strs[j][i] !== currentChar) {
				return commonPrefix;
			}
		}
		commonPrefix += currentChar;
	}
	return commonPrefix;
}
