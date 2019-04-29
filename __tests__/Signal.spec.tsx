import "react-native";
import React from "react";
import { Signal } from "../src";

import renderer from "react-test-renderer";

describe("Signal", () => {
  it("renders correctly", () => {
    renderer.create(<Signal />);
  });
});
