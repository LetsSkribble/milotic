import "react-native";
import React from "react";
import { Stack } from "../src";

import renderer from "react-test-renderer";

describe("Stack", () => {
  it("renders correctly", () => {
    renderer.create(<Stack />);
  });
});
