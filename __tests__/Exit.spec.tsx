import "react-native";
import React from "react";
import Exit from "../src/icons/Exit";

import renderer from "react-test-renderer";

describe("Exit", () => {
  it("renders correctly", () => {
    renderer.create(<Exit />);
  });
});
