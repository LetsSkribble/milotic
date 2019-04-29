import "react-native";
import React from "react";
import Minimise from "../src/icons/Minimise";

import renderer from "react-test-renderer";

describe("Minimise", () => {
  it("renders correctly", () => {
    renderer.create(<Minimise />);
  });
});
