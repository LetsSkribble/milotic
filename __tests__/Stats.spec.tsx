import "react-native";
import React from "react";
import { Stats } from "../src";

import renderer from "react-test-renderer";

describe("Stats", () => {
  it("renders correctly", () => {
    renderer.create(<Stats />);
  });
});
