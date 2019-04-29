import "react-native";
import React from "react";
import { ArrowUp } from "../src";

import renderer from "react-test-renderer";

describe("ArrowUp", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowUp />);
  });
});
