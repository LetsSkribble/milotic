import "react-native";
import React from "react";
import Support from "../src/icons/Support";

import renderer from "react-test-renderer";

describe("Support", () => {
  it("renders correctly", () => {
    renderer.create(<Support />);
  });
});
