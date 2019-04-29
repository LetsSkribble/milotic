import "react-native";
import React from "react";
import { Home } from "../src";

import renderer from "react-test-renderer";

describe("Home", () => {
  it("renders correctly", () => {
    renderer.create(<Home />);
  });
});
