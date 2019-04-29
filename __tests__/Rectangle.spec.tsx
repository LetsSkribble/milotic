import "react-native";
import React from "react";
import Rectangle from "../src/icons/Rectangle";

import renderer from "react-test-renderer";

describe("Rectangle", () => {
  it("renders correctly", () => {
    renderer.create(<Rectangle />);
  });
});
