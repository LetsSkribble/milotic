import "react-native";
import React from "react";
import Stop from "../src/icons/Stop";

import renderer from "react-test-renderer";

describe("Stop", () => {
  it("renders correctly", () => {
    renderer.create(<Stop />);
  });
});
