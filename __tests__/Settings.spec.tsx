import "react-native";
import React from "react";
import { Settings } from "../src";

import renderer from "react-test-renderer";

describe("Settings", () => {
  it("renders correctly", () => {
    renderer.create(<Settings />);
  });
});
