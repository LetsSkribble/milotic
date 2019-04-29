import "react-native";
import React from "react";
import { ChevronRight } from "../src";

import renderer from "react-test-renderer";

describe("ChevronRight", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronRight />);
  });
});
