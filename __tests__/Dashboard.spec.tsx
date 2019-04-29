import "react-native";
import React from "react";
import Dashboard from "../src/icons/Dashboard";

import renderer from "react-test-renderer";

describe("Dashboard", () => {
  it("renders correctly", () => {
    renderer.create(<Dashboard />);
  });
});
