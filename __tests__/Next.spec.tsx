import "react-native";
import React from "react";
import Next from "../src/icons/Next";

import renderer from "react-test-renderer";

describe("Next", () => {
  it("renders correctly", () => {
    renderer.create(<Next />);
  });
});
