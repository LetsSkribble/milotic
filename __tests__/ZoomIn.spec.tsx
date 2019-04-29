import "react-native";
import React from "react";
import ZoomIn from "../src/icons/ZoomIn";

import renderer from "react-test-renderer";

describe("ZoomIn", () => {
  it("renders correctly", () => {
    renderer.create(<ZoomIn />);
  });
});
