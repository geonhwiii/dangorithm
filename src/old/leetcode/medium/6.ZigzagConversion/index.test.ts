import { describe, expect, it } from 'vitest';
import { convert } from './index';

describe('MEDIUM_6_ZigzagConversion', () => {
	it('case 1', () => {
		const s = 'PAYPALISHIRING';
		const numRows = 3;
		const answer = convert(s, numRows);
		expect(answer).toEqual('PAHNAPLSIIGYIR');
	});
	it('case 2', () => {
		const s = 'PAYPALISHIRING';
		const numRows = 4;
		const answer = convert(s, numRows);
		expect(answer).toEqual('PINALSIGYAHRPI');
	});
	it('case 3', () => {
		const s = 'A';
		const numRows = 1;
		const answer = convert(s, numRows);
		expect(answer).toEqual('A');
	});
});
