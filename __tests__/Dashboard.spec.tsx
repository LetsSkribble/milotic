import "react-native";
import React from "react";
import { Dashboard } from "../src";

import renderer from "react-test-renderer";

describe("Dashboard", () => {
  it("renders correctly", () => {
    renderer.create(<Dashboard />);
  });
});
