import "react-native";
import React from "react";
import { BatteryFull } from "../src";

import renderer from "react-test-renderer";

describe("BatteryFull", () => {
  it("renders correctly", () => {
    renderer.create(<BatteryFull />);
  });
});
