import "react-native";
import React from "react";
import { SuitcaseAlt } from "../src";

import renderer from "react-test-renderer";

describe("SuitcaseAlt", () => {
  it("renders correctly", () => {
    renderer.create(<SuitcaseAlt />);
  });
});
