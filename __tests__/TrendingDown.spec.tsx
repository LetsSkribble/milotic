import "react-native";
import React from "react";
import { TrendingDown } from "../src";

import renderer from "react-test-renderer";

describe("TrendingDown", () => {
  it("renders correctly", () => {
    renderer.create(<TrendingDown />);
  });
});
