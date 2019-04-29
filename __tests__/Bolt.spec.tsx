import "react-native";
import React from "react";
import { Bolt } from "../src";

import renderer from "react-test-renderer";

describe("Bolt", () => {
  it("renders correctly", () => {
    renderer.create(<Bolt />);
  });
});
