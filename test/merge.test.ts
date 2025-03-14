import { merge } from "../src/merge";

describe("merge function", () => {
  test("merges three non-empty arrays correctly", () => {
    const collection1 = [1, 5, 9];
    const collection2 = [2, 6, 10];
    const collection3 = [15, 11, 7, 3];
    const expected = [1, 2, 3, 5, 6, 7, 9, 10, 11, 15];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  test("merges correctly when some arrays are empty", () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 7, 5]; 
    const expected = [2, 4, 5, 6, 7, 9];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  test("merges correctly when all arrays are empty", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const expected: number[] = [];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
});
