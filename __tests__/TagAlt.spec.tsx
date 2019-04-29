import "react-native";
import React from "react";
import { TagAlt } from "../src";

import renderer from "react-test-renderer";

describe("TagAlt", () => {
  it("renders correctly", () => {
    renderer.create(<TagAlt />);
  });
});
