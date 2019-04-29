import "react-native";
import React from "react";
import Microphone from "../src/icons/Microphone";

import renderer from "react-test-renderer";

describe("Microphone", () => {
  it("renders correctly", () => {
    renderer.create(<Microphone />);
  });
});
