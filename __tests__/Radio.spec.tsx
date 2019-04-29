import "react-native";
import React from "react";
import { Radio } from "../src";

import renderer from "react-test-renderer";

describe("Radio", () => {
  it("renders correctly", () => {
    renderer.create(<Radio />);
  });
});
