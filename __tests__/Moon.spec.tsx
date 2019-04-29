import "react-native";
import React from "react";
import Moon from "../src/icons/Moon";

import renderer from "react-test-renderer";

describe("Moon", () => {
  it("renders correctly", () => {
    renderer.create(<Moon />);
  });
});
