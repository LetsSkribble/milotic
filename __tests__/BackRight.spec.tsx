import "react-native";
import React from "react";
import { BackRight } from "../src";

import renderer from "react-test-renderer";

describe("BackRight", () => {
  it("renders correctly", () => {
    renderer.create(<BackRight />);
  });
});
