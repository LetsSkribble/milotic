import "react-native";
import React from "react";
import Activity from "../src/icons/Activity";

import renderer from "react-test-renderer";

describe("Activity", () => {
  it("renders correctly", () => {
    renderer.create(<Activity />);
  });
});
