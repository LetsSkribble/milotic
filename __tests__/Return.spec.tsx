import "react-native";
import React from "react";
import { Return } from "../src";

import renderer from "react-test-renderer";

describe("Return", () => {
  it("renders correctly", () => {
    renderer.create(<Return />);
  });
});
