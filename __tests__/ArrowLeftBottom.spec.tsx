import "react-native";
import React from "react";
import { ArrowLeftBottom } from "../src";

import renderer from "react-test-renderer";

describe("ArrowLeftBottom", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowLeftBottom />);
  });
});
