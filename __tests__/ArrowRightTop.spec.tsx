import "react-native";
import React from "react";
import ArrowRightTop from "../src/icons/ArrowRightTop";

import renderer from "react-test-renderer";

describe("ArrowRightTop", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowRightTop />);
  });
});
