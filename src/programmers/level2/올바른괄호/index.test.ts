import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_올바른괄호', () => {
	it('case 1', () => {
		const s = '()()';
		const answer = solution(s);
		expect(answer).toEqual(true);
	});
	it('case 2', () => {
		const s = '(())()';
		const answer = solution(s);
		expect(answer).toEqual(true);
	});
	it('case 3', () => {
		const s = ')()(';
		const answer = solution(s);
		expect(answer).toEqual(false);
	});
	it('case 4', () => {
		const s = '(()(';
		const answer = solution(s);
		expect(answer).toEqual(false);
	});
});
