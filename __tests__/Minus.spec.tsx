import "react-native";
import React from "react";
import Minus from "../src/icons/Minus";

import renderer from "react-test-renderer";

describe("Minus", () => {
  it("renders correctly", () => {
    renderer.create(<Minus />);
  });
});
