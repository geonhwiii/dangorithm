interface TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

interface Result {
	preorder: number[];
	inorder: number[];
	postorder: number[];
}

export function solution(root: TreeNode): Result {
	const tree = new Tree(root);

	return {
		preorder: tree.preorder(),
		inorder: tree.inorder(),
		postorder: tree.postorder(),
	};
}

class Tree {
	root: TreeNode;

	constructor(root: TreeNode) {
		this.root = root;
	}

	preorder() {
		const result: number[] = [];
		function traverse(node: TreeNode | null) {
			if (!node) return;
			result.push(node.value);
			traverse(node.left);
			traverse(node.right);
		}
		traverse(this.root);
		return result;
	}
	inorder() {
		const result: number[] = [];
		function traverse(node: TreeNode | null) {
			if (!node) return;
			traverse(node.left);
			result.push(node.value);
			traverse(node.right);
		}
		traverse(this.root);
		return result;
	}

	postorder() {
		const result: number[] = [];
		function traverse(node: TreeNode | null) {
			if (!node) return;
			traverse(node.left);
			traverse(node.right);
			result.push(node.value);
		}
		traverse(this.root);
		return result;
	}
}
