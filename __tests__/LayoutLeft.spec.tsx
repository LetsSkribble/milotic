import "react-native";
import React from "react";
import LayoutLeft from "../src/icons/LayoutLeft";

import renderer from "react-test-renderer";

describe("LayoutLeft", () => {
  it("renders correctly", () => {
    renderer.create(<LayoutLeft />);
  });
});
