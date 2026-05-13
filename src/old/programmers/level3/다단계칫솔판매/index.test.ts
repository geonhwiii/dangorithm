import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_3_다단계칫솔판매', () => {
	it('case 1', () => {
		const enroll = ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'];
		const referral = ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'];
		const seller = ['young', 'john', 'tod', 'emily', 'mary'];
		const amount = [12, 4, 2, 5, 10];
		expect(solution(enroll, referral, seller, amount)).toEqual([360, 958, 108, 0, 450, 18, 180, 1080]);
	});

	it('case 2', () => {
		const enroll = ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'];
		const referral = ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'];
		const seller = ['sam', 'emily', 'jaimie', 'edward'];
		const amount = [2, 3, 5, 4];
		expect(solution(enroll, referral, seller, amount)).toEqual([0, 110, 378, 180, 270, 450, 0, 0]);
	});
});
