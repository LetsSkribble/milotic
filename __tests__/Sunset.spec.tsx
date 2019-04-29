import "react-native";
import React from "react";
import { Sunset } from "../src";

import renderer from "react-test-renderer";

describe("Sunset", () => {
  it("renders correctly", () => {
    renderer.create(<Sunset />);
  });
});
