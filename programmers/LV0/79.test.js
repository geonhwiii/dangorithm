const solution = require("./79.외계어사전");

describe("79. 외계어사전", () => {
  it(`(1) "p", "o", "s" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2를 return합니다.`, () => {
    expect(
      solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])
    ).toEqual(2);
  });
  it(`(2) "z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 dic에 존재합니다. 따라서 1을 return합니다.`, () => {
    expect(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])).toEqual(
      1
    );
  });
  it(`(3) "s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2을 return합니다.`, () => {
    expect(
      solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
    ).toEqual(2);
  });
});
