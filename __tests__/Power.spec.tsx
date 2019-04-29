import "react-native";
import React from "react";
import { Power } from "../src";

import renderer from "react-test-renderer";

describe("Power", () => {
  it("renders correctly", () => {
    renderer.create(<Power />);
  });
});
