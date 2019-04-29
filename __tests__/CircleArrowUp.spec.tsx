import "react-native";
import React from "react";
import CircleArrowUp from "../src/icons/CircleArrowUp";

import renderer from "react-test-renderer";

describe("CircleArrowUp", () => {
  it("renders correctly", () => {
    renderer.create(<CircleArrowUp />);
  });
});
