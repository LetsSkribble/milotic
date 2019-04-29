import "react-native";
import React from "react";
import { Microphone } from "../src";

import renderer from "react-test-renderer";

describe("Microphone", () => {
  it("renders correctly", () => {
    renderer.create(<Microphone />);
  });
});
