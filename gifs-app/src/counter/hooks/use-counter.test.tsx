import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useCounter } from "./use-counter";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter } = result.current;
    expect(counter).toBe(10);
  });
});
