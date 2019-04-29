import "react-native";
import React from "react";
import ArrowLeft from "../src/icons/ArrowLeft";

import renderer from "react-test-renderer";

describe("ArrowLeft", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowLeft />);
  });
});
