import "react-native";
import React from "react";
import { Timer } from "../src";

import renderer from "react-test-renderer";

describe("Timer", () => {
  it("renders correctly", () => {
    renderer.create(<Timer />);
  });
});
