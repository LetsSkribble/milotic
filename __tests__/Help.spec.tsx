import "react-native";
import React from "react";
import { Help } from "../src";

import renderer from "react-test-renderer";

describe("Help", () => {
  it("renders correctly", () => {
    renderer.create(<Help />);
  });
});
