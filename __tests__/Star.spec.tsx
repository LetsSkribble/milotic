import "react-native";
import React from "react";
import { Star } from "../src";

import renderer from "react-test-renderer";

describe("Star", () => {
  it("renders correctly", () => {
    renderer.create(<Star />);
  });
});
