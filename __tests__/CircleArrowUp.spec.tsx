import "react-native";
import React from "react";
import { CircleArrowUp } from "../src";

import renderer from "react-test-renderer";

describe("CircleArrowUp", () => {
  it("renders correctly", () => {
    renderer.create(<CircleArrowUp />);
  });
});
