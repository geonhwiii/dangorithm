import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_크기가작은부분문자열', () => {
	it('case 1', () => {
		const t = '3141592';
		const p = '271';
		const answer = solution(t, p);
		expect(answer).toEqual(2);
	});
	it('case 2', () => {
		const t = '500220839878';
		const p = '7';
		const answer = solution(t, p);
		expect(answer).toEqual(8);
	});
	it('case 3', () => {
		const t = '10203';
		const p = '15';
		const answer = solution(t, p);
		expect(answer).toEqual(3);
	});
});
