import "react-native";
import React from "react";
import { Mute } from "../src";

import renderer from "react-test-renderer";

describe("Mute", () => {
  it("renders correctly", () => {
    renderer.create(<Mute />);
  });
});
