import "react-native";
import React from "react";
import LayoutRight from "../src/icons/LayoutRight";

import renderer from "react-test-renderer";

describe("LayoutRight", () => {
  it("renders correctly", () => {
    renderer.create(<LayoutRight />);
  });
});
