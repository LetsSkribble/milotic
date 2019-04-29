import "react-native";
import React from "react";
import SignalAlt from "../src/icons/SignalAlt";

import renderer from "react-test-renderer";

describe("SignalAlt", () => {
  it("renders correctly", () => {
    renderer.create(<SignalAlt />);
  });
});
