import "react-native";
import React from "react";
import { Pause } from "../src";

import renderer from "react-test-renderer";

describe("Pause", () => {
  it("renders correctly", () => {
    renderer.create(<Pause />);
  });
});
