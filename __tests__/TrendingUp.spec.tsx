import "react-native";
import React from "react";
import { TrendingUp } from "../src";

import renderer from "react-test-renderer";

describe("TrendingUp", () => {
  it("renders correctly", () => {
    renderer.create(<TrendingUp />);
  });
});
