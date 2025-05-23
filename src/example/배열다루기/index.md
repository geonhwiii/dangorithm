# 배열 다루기

### 문제 설명
주어진 배열에서 특정 조건을 만족하는 요소들을 찾아 새로운 배열을 만드는 함수를 구현해보세요.

### 요구사항
1. 주어진 배열에서 짝수만 찾아 새로운 배열 만들기
2. 주어진 배열에서 3의 배수만 찾아 새로운 배열 만들기
3. 주어진 배열에서 특정 값보다 큰 수만 찾아 새로운 배열 만들기

### 입출력 예시
```typescript
// 입력
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 출력
// 1. 짝수만 찾기
[2, 4, 6, 8, 10]

// 2. 3의 배수만 찾기
[3, 6, 9]

// 3. 5보다 큰 수만 찾기
[6, 7, 8, 9, 10]
```

### 제한사항
- 배열의 길이는 1 이상 100 이하입니다.
- 배열의 각 요소는 1 이상 100 이하의 정수입니다.

### 힌트
1. `filter` 메서드를 사용해보세요.
2. 나머지 연산자(`%`)를 활용해보세요.
3. 비교 연산자(`>`, `<`, `===`)를 활용해보세요. 