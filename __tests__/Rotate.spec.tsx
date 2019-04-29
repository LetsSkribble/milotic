import "react-native";
import React from "react";
import { Rotate } from "../src";

import renderer from "react-test-renderer";

describe("Rotate", () => {
  it("renders correctly", () => {
    renderer.create(<Rotate />);
  });
});
