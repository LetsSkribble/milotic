import "react-native";
import React from "react";
import Time from "../src/icons/Time";

import renderer from "react-test-renderer";

describe("Time", () => {
  it("renders correctly", () => {
    renderer.create(<Time />);
  });
});
