import "react-native";
import React from "react";
import BatteryMedium from "../src/icons/BatteryMedium";

import renderer from "react-test-renderer";

describe("BatteryMedium", () => {
  it("renders correctly", () => {
    renderer.create(<BatteryMedium />);
  });
});
