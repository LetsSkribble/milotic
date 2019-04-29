import "react-native";
import React from "react";
import Bell from "../src/icons/Bell";

import renderer from "react-test-renderer";

describe("Bell", () => {
  it("renders correctly", () => {
    renderer.create(<Bell />);
  });
});
