import { describe, expect, it } from "vitest";
import { createCounter } from "./index";

describe("EASY_2620_Counter", () => {
  it("case 1", () => {
    const counter = createCounter(10);
    expect(counter()).toEqual(10);
    expect(counter()).toEqual(11);
    expect(counter()).toEqual(12);
  });
});
