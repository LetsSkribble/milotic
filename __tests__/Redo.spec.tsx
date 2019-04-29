import "react-native";
import React from "react";
import Redo from "../src/icons/Redo";

import renderer from "react-test-renderer";

describe("Redo", () => {
  it("renders correctly", () => {
    renderer.create(<Redo />);
  });
});
