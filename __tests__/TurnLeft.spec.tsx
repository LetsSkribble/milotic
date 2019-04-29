import "react-native";
import React from "react";
import { TurnLeft } from "../src";

import renderer from "react-test-renderer";

describe("TurnLeft", () => {
  it("renders correctly", () => {
    renderer.create(<TurnLeft />);
  });
});
