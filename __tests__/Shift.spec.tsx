import "react-native";
import React from "react";
import Shift from "../src/icons/Shift";

import renderer from "react-test-renderer";

describe("Shift", () => {
  it("renders correctly", () => {
    renderer.create(<Shift />);
  });
});
