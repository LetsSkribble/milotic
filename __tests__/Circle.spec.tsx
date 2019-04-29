import "react-native";
import React from "react";
import Circle from "../src/icons/Circle";

import renderer from "react-test-renderer";

describe("Circle", () => {
  it("renders correctly", () => {
    renderer.create(<Circle />);
  });
});
