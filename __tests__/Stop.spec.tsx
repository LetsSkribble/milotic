import "react-native";
import React from "react";
import { Stop } from "../src";

import renderer from "react-test-renderer";

describe("Stop", () => {
  it("renders correctly", () => {
    renderer.create(<Stop />);
  });
});
