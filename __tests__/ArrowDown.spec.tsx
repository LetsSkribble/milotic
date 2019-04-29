import "react-native";
import React from "react";
import { ArrowDown } from "../src";

import renderer from "react-test-renderer";

describe("ArrowDown", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowDown />);
  });
});
