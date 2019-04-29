import "react-native";
import React from "react";
import { LayoutLeft } from "../src";

import renderer from "react-test-renderer";

describe("LayoutLeft", () => {
  it("renders correctly", () => {
    renderer.create(<LayoutLeft />);
  });
});
