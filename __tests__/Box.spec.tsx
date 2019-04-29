import "react-native";
import React from "react";
import Box from "../src/icons/Box";

import renderer from "react-test-renderer";

describe("Box", () => {
  it("renders correctly", () => {
    renderer.create(<Box />);
  });
});
