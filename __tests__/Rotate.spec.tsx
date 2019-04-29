import "react-native";
import React from "react";
import Rotate from "../src/icons/Rotate";

import renderer from "react-test-renderer";

describe("Rotate", () => {
  it("renders correctly", () => {
    renderer.create(<Rotate />);
  });
});
