import "react-native";
import React from "react";
import { Next } from "../src";

import renderer from "react-test-renderer";

describe("Next", () => {
  it("renders correctly", () => {
    renderer.create(<Next />);
  });
});
