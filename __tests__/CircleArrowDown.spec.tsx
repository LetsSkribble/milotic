import "react-native";
import React from "react";
import { CircleArrowDown } from "../src";

import renderer from "react-test-renderer";

describe("CircleArrowDown", () => {
  it("renders correctly", () => {
    renderer.create(<CircleArrowDown />);
  });
});
