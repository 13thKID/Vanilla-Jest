import { sumAll, upAndDown } from "./index.ts";

describe("sumAll", () => {
  it("works", () => {
    expect(sumAll()).toEqual(0);
  });
});

describe("upAndDown", () => {
  it("works", () => {
    expect(upAndDown([])).toEqual([]);
  });
});
