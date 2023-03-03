import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders the input element with the correct type and value", () => {
    const type = "submit";
    const value = "Submit";

    render(<Button type={type} value={value} />);

    const input = screen.getByDisplayValue(value);

    expect(input).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    const type = "submit";
    const value = "Submit";

    render(<Button type={type} value={value} />);

    const input = screen.getByDisplayValue(value);

    expect(input).toHaveClass("button");
  });
});
