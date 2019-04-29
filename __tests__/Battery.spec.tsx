import "react-native";
import React from "react";
import Battery from "../src/icons/Battery";

import renderer from "react-test-renderer";

describe("Battery", () => {
  it("renders correctly", () => {
    renderer.create(<Battery />);
  });
});
