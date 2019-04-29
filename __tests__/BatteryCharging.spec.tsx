import "react-native";
import React from "react";
import { BatteryCharging } from "../src";

import renderer from "react-test-renderer";

describe("BatteryCharging", () => {
  it("renders correctly", () => {
    renderer.create(<BatteryCharging />);
  });
});
