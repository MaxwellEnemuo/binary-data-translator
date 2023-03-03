import React from "react";
import { render } from "@testing-library/react";
import { InputField } from "./InputField";

describe("InputField component", () => {
  it("renders the input field correctly", () => {
    const { asFragment } = render(
      <InputField type="text" id="username" value="test" onChange={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
