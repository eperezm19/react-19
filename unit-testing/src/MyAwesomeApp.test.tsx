import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";
describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toBe("John");
    const h2 = container.querySelector("h2");
    expect(h2?.innerHTML).toBe("Doe");
  });
  test("should render firstName and lastName --screen", () => {
    render(<MyAwesomeApp />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1?.innerHTML).toBe("John");
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2?.innerHTML).toBe("Doe");
  });

  test(' should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
