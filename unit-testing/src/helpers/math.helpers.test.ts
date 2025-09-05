import { test, expect, describe } from "vitest";
import { add, subtract, multiply, divide } from "./math.helpers";

describe("add function", () => {
  test("should add two numbers positive", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;

    // 2. Act
    const result = add(a, b);

    // 3. Assert
    expect(result).toBe(a + b);
  });
  test("should add two numbers negative", () => {
    const a = -1;
    const b = -2;
    const result = add(a, b);
    expect(result).toBe(a + b);
  });
});

describe("subtract function", () => {
  test("should subtract two numbers positive", () => {
    const a = 1;
    const b = 2;
    const result = subtract(a, b);
    expect(result).toBe(a - b);
  });
});

describe("multiply function", () => {
  test("should multiply two numbers positive", () => {
    const a = 1;
    const b = 2;
    const result = multiply(a, b);
    expect(result).toBe(a * b);
  });
});

describe("divide function", () => {
  test("should divide two numbers positive", () => {
    const a = 1;
    const b = 2;
    const result = divide(a, b);
    expect(result).toBe(a / b);
  });
});
