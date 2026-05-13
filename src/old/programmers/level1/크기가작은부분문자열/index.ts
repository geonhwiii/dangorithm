export function solution(t: string, p: string) {
	const spliceArray = [...t]
		.map((_, index) => t.slice(index, index + p.length))
		.filter((item) => item.length === p.length && Number(item) <= Number(p));
	return spliceArray.length;
}
