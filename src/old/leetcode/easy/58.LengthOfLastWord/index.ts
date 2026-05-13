export function lengthOfLastWord(s: string): number {
	return (
		s
			.split(' ')
			.filter((v) => v.length > 0)
			.pop()?.length ?? 0
	);
}
