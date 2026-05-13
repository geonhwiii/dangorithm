290. Word Pattern

패턴 문자열 pattern과 문자열 s가 주어졌을 때, s가 pattern과 같은 패턴을 따르는지 확인하세요.

여기서 패턴을 따른다는 의미는 pattern의 각 문자와 s의 단어 사이에 일대일 대응(bijection)이 존재해야 한다는 뜻입니다. 즉,

    pattern의 각 문자는 s의 한 단어와 정확히 하나씩 1:1로 매핑됩니다.
    s의 각 단어도 pattern의 한 문자와 정확히 하나씩 1:1로 매핑됩니다.
    두 개의 문자가 같은 단어에 매핑되거나, 두 단어가 같은 문자에 매핑되는 경우는 없습니다.

### 예시 1:

입력: pattern = "abba", s = "dog cat cat dog"

출력: true

설명:

다음과 같이 일대일 매핑이 가능합니다:

    'a' -> "dog"
    'b' -> "cat"

### 예시 2:

입력: pattern = "abba", s = "dog cat cat fish"

출력: false

### 예시 3:

입력: pattern = "aaaa", s = "dog cat cat dog"

출력: false

제약사항:

    1 <= pattern.length <= 300
    pattern은 소문자 영문자로만 이루어져 있습니다.
    1 <= s.length <= 3000
    s는 소문자 영문자와 공백(' ')만 포함합니다.
    s에는 앞뒤에 공백이 없으며, 단어들은 하나의 공백으로만 구분됩니다.
