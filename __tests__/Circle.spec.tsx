import "react-native";
import React from "react";
import { Circle } from "../src";

import renderer from "react-test-renderer";

describe("Circle", () => {
  it("renders correctly", () => {
    renderer.create(<Circle />);
  });
});
