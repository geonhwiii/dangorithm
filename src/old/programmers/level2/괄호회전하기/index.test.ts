import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_괄호회전하기', () => {
	it('case 1', () => {
		const s = '[](){}';
		const answer = solution(s);
		expect(answer).toEqual(3);
	});
	it('case 2', () => {
		const s = '}]()[{';
		const answer = solution(s);
		expect(answer).toEqual(2);
	});
	it('case 3', () => {
		const s = '[)(]';
		const answer = solution(s);
		expect(answer).toEqual(0);
	});
	it('case 4', () => {
		const s = '}}}';
		const answer = solution(s);
		expect(answer).toEqual(0);
	});
});
