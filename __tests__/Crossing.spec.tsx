import "react-native";
import React from "react";
import Crossing from "../src/icons/Crossing";

import renderer from "react-test-renderer";

describe("Crossing", () => {
  it("renders correctly", () => {
    renderer.create(<Crossing />);
  });
});
