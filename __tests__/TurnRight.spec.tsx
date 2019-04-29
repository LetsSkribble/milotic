import "react-native";
import React from "react";
import TurnRight from "../src/icons/TurnRight";

import renderer from "react-test-renderer";

describe("TurnRight", () => {
  it("renders correctly", () => {
    renderer.create(<TurnRight />);
  });
});
