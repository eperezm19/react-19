import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ItemCounter from "./item-counter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test Item";
    const quantity = 1;
    render(<ItemCounter itemName={name} quantity={quantity} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Test Item";
    const quantity = 10;
    render(<ItemCounter itemName={name} quantity={quantity} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });
});
