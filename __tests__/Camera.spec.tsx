import "react-native";
import React from "react";
import Camera from "../src/icons/Camera";

import renderer from "react-test-renderer";

describe("Camera", () => {
  it("renders correctly", () => {
    renderer.create(<Camera />);
  });
});
