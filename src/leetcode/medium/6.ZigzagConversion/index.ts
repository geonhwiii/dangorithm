export function convert(s: string, numRows: number): string {
	if (numRows === 1) return s;

	const rows = Array(numRows).fill('');
	let currentRow = 0;
	let isBottom = true;

	for (const char of s) {
		rows[currentRow] += char;
		if (currentRow === 0) {
			isBottom = true;
		} else if (currentRow === numRows - 1) {
			isBottom = false;
		}
		currentRow += isBottom ? 1 : -1;
	}
	return rows.join('');
}
