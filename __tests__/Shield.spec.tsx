import "react-native";
import React from "react";
import { Shield } from "../src";

import renderer from "react-test-renderer";

describe("Shield", () => {
  it("renders correctly", () => {
    renderer.create(<Shield />);
  });
});
