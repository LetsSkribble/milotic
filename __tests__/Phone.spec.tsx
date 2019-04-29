import "react-native";
import React from "react";
import Phone from "../src/icons/Phone";

import renderer from "react-test-renderer";

describe("Phone", () => {
  it("renders correctly", () => {
    renderer.create(<Phone />);
  });
});
