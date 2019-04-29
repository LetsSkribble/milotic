import "react-native";
import React from "react";
import { Refresh } from "../src";

import renderer from "react-test-renderer";

describe("Refresh", () => {
  it("renders correctly", () => {
    renderer.create(<Refresh />);
  });
});
