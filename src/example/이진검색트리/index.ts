interface TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

class Node {
	left: TreeNode | null = null;
	right: TreeNode | null = null;
	constructor(public value: number) {}
}

export class BinarySearchTree {
	private root: TreeNode | null;

	constructor() {
		this.root = null;
	}

	insert(value: number): void {
		if (!this.root) {
			this.root = new Node(value);
			return;
		}
		let node = this.root;
		while (true) {
			if (value < node.value) {
				if (node.left) {
					node = node.left;
				} else {
					node.left = new Node(value);
					break;
				}
			} else {
				if (node.right) {
					node = node.right;
				} else {
					node.right = new Node(value);
					break;
				}
			}
		}
	}

	search(value: number): boolean {
		let node = this.root;

		while (node) {
			if (value < node.value) {
				node = node.left;
			} else if (value > node.value) {
				node = node.right;
			} else {
				return true;
			}
		}

		return false;
	}

	delete(value: number): void {
		let node = this.root;
		let parent: TreeNode | null = null;

		// 삭제할 노드 찾기
		while (node && node.value !== value) {
			parent = node;
			if (value < node.value) {
				node = node.left;
			} else {
				node = node.right;
			}
		}

		if (!node) return; // 삭제할 노드가 없음

		// 1. 자식이 없는 경우 (리프 노드)
		if (!node.left && !node.right) {
			if (!parent) {
				this.root = null;
			} else if (parent.left === node) {
				parent.left = null;
			} else {
				parent.right = null;
			}
		}
		// 2. 자식이 하나인 경우
		else if (!node.left || !node.right) {
			const child = node.left || node.right;
			if (!parent) {
				this.root = child;
			} else if (parent.left === node) {
				parent.left = child;
			} else {
				parent.right = child;
			}
		}
		// 3. 자식이 둘인 경우
		else {
			// 오른쪽 서브트리에서 가장 작은 값 찾기
			let successor = node.right;
			let successorParent = node;

			while (successor.left) {
				successorParent = successor;
				successor = successor.left;
			}

			// successor의 값을 node로 복사
			node.value = successor.value;

			// successor 삭제 (successor는 왼쪽 자식이 없음)
			if (successorParent.left === successor) {
				successorParent.left = successor.right;
			} else {
				successorParent.right = successor.right;
			}
		}
	}
}
