import "react-native";
import React from "react";
import { Tool } from "../src";

import renderer from "react-test-renderer";

describe("Tool", () => {
  it("renders correctly", () => {
    renderer.create(<Tool />);
  });
});
