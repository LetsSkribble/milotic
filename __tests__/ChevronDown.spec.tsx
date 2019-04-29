import "react-native";
import React from "react";
import { ChevronDown } from "../src";

import renderer from "react-test-renderer";

describe("ChevronDown", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronDown />);
  });
});
