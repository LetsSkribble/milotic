import "react-native";
import React from "react";
import BatteryCharging from "../src/icons/BatteryCharging";

import renderer from "react-test-renderer";

describe("BatteryCharging", () => {
  it("renders correctly", () => {
    renderer.create(<BatteryCharging />);
  });
});
