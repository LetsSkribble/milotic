import "react-native";
import React from "react";
import Vertical from "../src/icons/Vertical";

import renderer from "react-test-renderer";

describe("Vertical", () => {
  it("renders correctly", () => {
    renderer.create(<Vertical />);
  });
});
