import "react-native";
import React from "react";
import Headphones from "../src/icons/Headphones";

import renderer from "react-test-renderer";

describe("Headphones", () => {
  it("renders correctly", () => {
    renderer.create(<Headphones />);
  });
});
