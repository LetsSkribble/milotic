import "react-native";
import React from "react";
import { Cup } from "../src";

import renderer from "react-test-renderer";

describe("Cup", () => {
  it("renders correctly", () => {
    renderer.create(<Cup />);
  });
});
