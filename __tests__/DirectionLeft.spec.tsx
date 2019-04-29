import "react-native";
import React from "react";
import DirectionLeft from "../src/icons/DirectionLeft";

import renderer from "react-test-renderer";

describe("DirectionLeft", () => {
  it("renders correctly", () => {
    renderer.create(<DirectionLeft />);
  });
});
