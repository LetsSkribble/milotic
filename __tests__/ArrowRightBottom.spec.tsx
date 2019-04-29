import "react-native";
import React from "react";
import { ArrowRightBottom } from "../src";

import renderer from "react-test-renderer";

describe("ArrowRightBottom", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowRightBottom />);
  });
});
