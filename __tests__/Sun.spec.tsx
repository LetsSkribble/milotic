import "react-native";
import React from "react";
import Sun from "../src/icons/Sun";

import renderer from "react-test-renderer";

describe("Sun", () => {
  it("renders correctly", () => {
    renderer.create(<Sun />);
  });
});
