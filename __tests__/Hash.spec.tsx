import "react-native";
import React from "react";
import Hash from "../src/icons/Hash";

import renderer from "react-test-renderer";

describe("Hash", () => {
  it("renders correctly", () => {
    renderer.create(<Hash />);
  });
});
