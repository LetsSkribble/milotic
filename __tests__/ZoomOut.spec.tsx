import "react-native";
import React from "react";
import ZoomOut from "../src/icons/ZoomOut";

import renderer from "react-test-renderer";

describe("ZoomOut", () => {
  it("renders correctly", () => {
    renderer.create(<ZoomOut />);
  });
});
