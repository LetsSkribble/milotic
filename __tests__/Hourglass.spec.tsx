import "react-native";
import React from "react";
import Hourglass from "../src/icons/Hourglass";

import renderer from "react-test-renderer";

describe("Hourglass", () => {
  it("renders correctly", () => {
    renderer.create(<Hourglass />);
  });
});
