import "react-native";
import React from "react";
import Remove from "../src/icons/Remove";

import renderer from "react-test-renderer";

describe("Remove", () => {
  it("renders correctly", () => {
    renderer.create(<Remove />);
  });
});
