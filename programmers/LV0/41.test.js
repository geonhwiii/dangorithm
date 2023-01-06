const solution = require("./41.개미군단");

describe("41. 개미군단", () => {
  it(`(1) hp가 23이므로, 장군개미 네마리와 병정개미 한마리로 사냥할 수 있습니다. 따라서 5를 return합니다.`, () => {
    expect(solution(23)).toBe(5);
  });
  it(`(2) hp가 24이므로, 장군개미 네마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 6을 return합니다.`, () => {
    expect(solution(24)).toBe(6);
  });
  it(`(3) hp가 999이므로, 장군개미 199 마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 201을 return합니다.`, () => {
    expect(solution(999)).toBe(201);
  });
});
