import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_의상', () => {
	it('case 1', () => {
		const record = [
			['yellow_hat', 'headgear'],
			['blue_sunglasses', 'eyewear'],
			['green_turban', 'headgear'],
		];
		const answer = solution(record);
		expect(answer).toEqual(5);
	});
	it('case 2', () => {
		const record = [
			['crow_mask', 'face'],
			['blue_sunglasses', 'face'],
			['smoky_makeup', 'face'],
		];
		const answer = solution(record);
		expect(answer).toEqual(3);
	});
});
