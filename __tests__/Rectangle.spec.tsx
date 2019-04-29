import "react-native";
import React from "react";
import { Rectangle } from "../src";

import renderer from "react-test-renderer";

describe("Rectangle", () => {
  it("renders correctly", () => {
    renderer.create(<Rectangle />);
  });
});
