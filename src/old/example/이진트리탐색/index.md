# 이진 트리 탐색

### 문제 설명
이진 트리의 노드를 탐색하는 함수를 구현해보세요. 이진 트리는 각 노드가 최대 두 개의 자식 노드를 가질 수 있는 트리 구조입니다.

### 요구사항
1. 전위 순회 (Preorder): 루트 -> 왼쪽 자식 -> 오른쪽 자식
2. 중위 순회 (Inorder): 왼쪽 자식 -> 루트 -> 오른쪽 자식
3. 후위 순회 (Postorder): 왼쪽 자식 -> 오른쪽 자식 -> 루트

### 입출력 예시
```typescript
// 입력
const tree = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null }
    },
    right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: { value: 7, left: null, right: null }
    }
};

// 출력
// 1. 전위 순회
[1, 2, 4, 5, 3, 6, 7]

// 2. 중위 순회
[4, 2, 5, 1, 6, 3, 7]

// 3. 후위 순회
[4, 5, 2, 6, 7, 3, 1]
```

### 제한사항
- 트리의 높이는 1 이상 10 이하입니다.
- 각 노드의 값은 1 이상 100 이하의 정수입니다.

### 힌트
1. 재귀 함수를 사용해보세요.
2. 각 순회 방식의 순서를 기억하세요.
3. null 체크를 잊지 마세요. 