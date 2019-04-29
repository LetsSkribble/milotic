import "react-native";
import React from "react";
import { Grid } from "../src";

import renderer from "react-test-renderer";

describe("Grid", () => {
  it("renders correctly", () => {
    renderer.create(<Grid />);
  });
});
