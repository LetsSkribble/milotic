import "react-native";
import React from "react";
import BatteryLow from "../src/icons/BatteryLow";

import renderer from "react-test-renderer";

describe("BatteryLow", () => {
  it("renders correctly", () => {
    renderer.create(<BatteryLow />);
  });
});
