import { describe, expect, it } from "vitest";
import { createHelloWorld } from "./index";

describe("EASY_2667_CreateHelloWorldFunction", () => {
  it("case 1", () => {
    const f = createHelloWorld();
    expect(f()).toEqual("Hello World");
  });
});
