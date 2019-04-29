import "react-native";
import React from "react";
import ArrowRight from "../src/icons/ArrowRight";

import renderer from "react-test-renderer";

describe("ArrowRight", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowRight />);
  });
});
