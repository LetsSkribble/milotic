import "react-native";
import React from "react";
import { Crossing } from "../src";

import renderer from "react-test-renderer";

describe("Crossing", () => {
  it("renders correctly", () => {
    renderer.create(<Crossing />);
  });
});
