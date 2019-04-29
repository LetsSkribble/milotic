import "react-native";
import React from "react";
import Undo from "../src/icons/Undo";

import renderer from "react-test-renderer";

describe("Undo", () => {
  it("renders correctly", () => {
    renderer.create(<Undo />);
  });
});
