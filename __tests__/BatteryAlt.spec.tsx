import "react-native";
import React from "react";
import BatteryAlt from "../src/icons/BatteryAlt";

import renderer from "react-test-renderer";

describe("BatteryAlt", () => {
  it("renders correctly", () => {
    renderer.create(<BatteryAlt />);
  });
});
