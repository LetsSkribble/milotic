import "react-native";
import React from "react";
import Settings from "../src/icons/Settings";

import renderer from "react-test-renderer";

describe("Settings", () => {
  it("renders correctly", () => {
    renderer.create(<Settings />);
  });
});
