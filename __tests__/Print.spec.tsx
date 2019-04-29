import "react-native";
import React from "react";
import { Print } from "../src";

import renderer from "react-test-renderer";

describe("Print", () => {
  it("renders correctly", () => {
    renderer.create(<Print />);
  });
});
