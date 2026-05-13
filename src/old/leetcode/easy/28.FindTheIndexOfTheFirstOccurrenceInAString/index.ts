export function strStr(haystack: string, needle: string): number {
	for (let i = 0; i < haystack.length; i++) {
		const char = haystack[i];
		if (char === needle[0]) {
			const substr = haystack.slice(i, i + needle.length);
			if (substr === needle) {
				return i;
			}
		}
	}
	return -1;
}
