import "react-native";
import React from "react";
import StatsAlt from "../src/icons/StatsAlt";

import renderer from "react-test-renderer";

describe("StatsAlt", () => {
  it("renders correctly", () => {
    renderer.create(<StatsAlt />);
  });
});
