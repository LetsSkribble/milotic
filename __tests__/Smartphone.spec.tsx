import "react-native";
import React from "react";
import Smartphone from "../src/icons/Smartphone";

import renderer from "react-test-renderer";

describe("Smartphone", () => {
  it("renders correctly", () => {
    renderer.create(<Smartphone />);
  });
});
