import "react-native";
import React from "react";
import SunCloud from "../src/icons/SunCloud";

import renderer from "react-test-renderer";

describe("SunCloud", () => {
  it("renders correctly", () => {
    renderer.create(<SunCloud />);
  });
});
