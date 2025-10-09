import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomHeader from "./custom-header";

describe("CustomHeader", () => {
  const title = "Test Title";
  const description = "Test Description";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
  });

  test("should render the description correctly", () => {
    render(<CustomHeader title={title} description={description} />);

    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should not render description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);

    const h1 = container.querySelector("h1");
    const p = container.querySelector("p");

    expect(h1?.innerHTML).toBe(title);

    expect(p).toBeNull();
  });
});
