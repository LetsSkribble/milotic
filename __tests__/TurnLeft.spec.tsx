import "react-native";
import React from "react";
import TurnLeft from "../src/icons/TurnLeft";

import renderer from "react-test-renderer";

describe("TurnLeft", () => {
  it("renders correctly", () => {
    renderer.create(<TurnLeft />);
  });
});
