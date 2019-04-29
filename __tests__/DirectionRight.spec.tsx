import "react-native";
import React from "react";
import DirectionRight from "../src/icons/DirectionRight";

import renderer from "react-test-renderer";

describe("DirectionRight", () => {
  it("renders correctly", () => {
    renderer.create(<DirectionRight />);
  });
});
