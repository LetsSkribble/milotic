import "react-native";
import React from "react";
import { ChevronUp } from "../src";

import renderer from "react-test-renderer";

describe("ChevronUp", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronUp />);
  });
});
