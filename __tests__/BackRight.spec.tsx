import "react-native";
import React from "react";
import BackRight from "../src/icons/BackRight";

import renderer from "react-test-renderer";

describe("BackRight", () => {
  it("renders correctly", () => {
    renderer.create(<BackRight />);
  });
});
