import "react-native";
import React from "react";
import ChevronUp from "../src/icons/ChevronUp";

import renderer from "react-test-renderer";

describe("ChevronUp", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronUp />);
  });
});
