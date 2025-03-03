import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_추억점수', () => {
	it('case 1', () => {
		const name = ['may', 'kein', 'kain', 'radi'];
		const yearning = [5, 10, 1, 3];
		const photo = [
			['may', 'kein', 'kain', 'radi'],
			['may', 'kein', 'brin', 'deny'],
			['kon', 'kain', 'may', 'coni'],
		];
		const answer = solution(name, yearning, photo);
		expect(answer).toEqual([19, 15, 6]);
	});
	it('case 2', () => {
		const name = ['kali', 'mari', 'don'];
		const yearning = [11, 1, 55];
		const photo = [
			['kali', 'mari', 'don'],
			['pony', 'tom', 'teddy'],
			['con', 'mona', 'don'],
		];
		const answer = solution(name, yearning, photo);
		expect(answer).toEqual([67, 0, 55]);
	});
	it('case 3', () => {
		const name = ['may', 'kein', 'kain', 'radi'];
		const yearning = [5, 10, 1, 3];
		const photo = [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']];
		const answer = solution(name, yearning, photo);
		expect(answer).toEqual([5, 15, 0]);
	});
});
