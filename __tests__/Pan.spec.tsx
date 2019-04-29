import "react-native";
import React from "react";
import Pan from "../src/icons/Pan";

import renderer from "react-test-renderer";

describe("Pan", () => {
  it("renders correctly", () => {
    renderer.create(<Pan />);
  });
});
