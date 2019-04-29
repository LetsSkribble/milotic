import "react-native";
import React from "react";
import { ZoomIn } from "../src";

import renderer from "react-test-renderer";

describe("ZoomIn", () => {
  it("renders correctly", () => {
    renderer.create(<ZoomIn />);
  });
});
