import "react-native";
import React from "react";
import Crop from "../src/icons/Crop";

import renderer from "react-test-renderer";

describe("Crop", () => {
  it("renders correctly", () => {
    renderer.create(<Crop />);
  });
});
