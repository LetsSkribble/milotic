import "react-native";
import React from "react";
import { AlignCenter } from "../src";

import renderer from "react-test-renderer";

describe("AlignCenter", () => {
  it("renders correctly", () => {
    renderer.create(<AlignCenter />);
  });
});
