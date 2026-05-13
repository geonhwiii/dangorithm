import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_메뉴리뉴얼', () => {
	it('case 1', () => {
		const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
		const course = [2, 3, 4];
		const answer = solution(orders, course);
		expect(answer).toEqual(['AC', 'ACDE', 'BCFG', 'CDE']);
	});
	it('case 2', () => {
		const orders = ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'];
		const course = [2, 3, 5];
		const answer = solution(orders, course);
		expect(answer).toEqual(['ACD', 'AD', 'ADE', 'CD', 'XYZ']);
	});
	it('case 3', () => {
		const orders = ['XYZ', 'XWY', 'WXA'];
		const course = [2, 3, 4];
		const answer = solution(orders, course);
		expect(answer).toEqual(['WX', 'XY']);
	});
});
