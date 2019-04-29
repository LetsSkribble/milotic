import "react-native";
import React from "react";
import BackAlt from "../src/icons/BackAlt";

import renderer from "react-test-renderer";

describe("BackAlt", () => {
  it("renders correctly", () => {
    renderer.create(<BackAlt />);
  });
});
