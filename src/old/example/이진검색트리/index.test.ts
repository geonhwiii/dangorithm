import { describe, it, expect } from 'vitest';
import { BinarySearchTree } from './index';

describe('example_이진검색트리', () => {
	it('case 1: 기본 연산 테스트', () => {
		const bst = new BinarySearchTree();

		// 삽입 테스트
		bst.insert(5);
		bst.insert(3);
		bst.insert(7);
		bst.insert(1);
		bst.insert(9);

		// 검색 테스트
		expect(bst.search(5)).toBe(true);
		expect(bst.search(3)).toBe(true);
		expect(bst.search(7)).toBe(true);
		expect(bst.search(1)).toBe(true);
		expect(bst.search(9)).toBe(true);
		expect(bst.search(4)).toBe(false);

		// 삭제 테스트
		bst.delete(3);
		expect(bst.search(3)).toBe(false);
		expect(bst.search(1)).toBe(true);
	});

	it('case 2: 삭제 연산 테스트', () => {
		const bst = new BinarySearchTree();

		// 트리 구성
		bst.insert(5);
		bst.insert(3);
		bst.insert(7);
		bst.insert(2);
		bst.insert(4);
		bst.insert(6);
		bst.insert(8);

		// 자식이 없는 노드 삭제
		bst.delete(2);
		expect(bst.search(2)).toBe(false);

		// 자식이 하나인 노드 삭제
		bst.delete(3);
		expect(bst.search(3)).toBe(false);
		expect(bst.search(4)).toBe(true);

		// 자식이 둘인 노드 삭제
		bst.delete(5);
		expect(bst.search(5)).toBe(false);
		expect(bst.search(6)).toBe(true);
	});
});
