import "react-native";
import React from "react";
import { Colours } from "../src";

import renderer from "react-test-renderer";

describe("Colours", () => {
  it("renders correctly", () => {
    renderer.create(<Colours />);
  });
});
