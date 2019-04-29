import "react-native";
import React from "react";
import { Rain } from "../src";

import renderer from "react-test-renderer";

describe("Rain", () => {
  it("renders correctly", () => {
    renderer.create(<Rain />);
  });
});
