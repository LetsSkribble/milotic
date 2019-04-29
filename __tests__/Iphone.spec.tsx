import "react-native";
import React from "react";
import Iphone from "../src/icons/Iphone";

import renderer from "react-test-renderer";

describe("Iphone", () => {
  it("renders correctly", () => {
    renderer.create(<Iphone />);
  });
});
