import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_전화번호목록', () => {
	it('case 1', () => {
		const phone_book = ['119', '97674223', '1195524421'];
		const answer = solution(phone_book);
		expect(answer).toEqual(false);
	});
	it('case 2', () => {
		const phone_book = ['123', '456', '789'];
		const answer = solution(phone_book);
		expect(answer).toEqual(true);
	});
	it('case 3', () => {
		const phone_book = ['12', '123', '1235', '567', '88'];
		const answer = solution(phone_book);
		expect(answer).toEqual(false);
	});
});
