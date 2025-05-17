import { describe, it, expect } from 'vitest';
import { solution } from './index';

describe('example_이진트리탐색', () => {
	it('case 1', () => {
		const tree = {
			value: 1,
			left: {
				value: 2,
				left: { value: 4, left: null, right: null },
				right: { value: 5, left: null, right: null },
			},
			right: {
				value: 3,
				left: { value: 6, left: null, right: null },
				right: { value: 7, left: null, right: null },
			},
		};

		const result = solution(tree);
		expect(result.preorder).toEqual([1, 2, 4, 5, 3, 6, 7]);
		expect(result.inorder).toEqual([4, 2, 5, 1, 6, 3, 7]);
		expect(result.postorder).toEqual([4, 5, 2, 6, 7, 3, 1]);
	});

	it('case 2', () => {
		const tree = {
			value: 1,
			left: {
				value: 2,
				left: null,
				right: { value: 3, left: null, right: null },
			},
			right: null,
		};

		const result = solution(tree);
		expect(result.preorder).toEqual([1, 2, 3]);
		expect(result.inorder).toEqual([2, 3, 1]);
		expect(result.postorder).toEqual([3, 2, 1]);
	});
});
