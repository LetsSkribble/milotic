import "react-native";
import React from "react";
import Cup from "../src/icons/Cup";

import renderer from "react-test-renderer";

describe("Cup", () => {
  it("renders correctly", () => {
    renderer.create(<Cup />);
  });
});
