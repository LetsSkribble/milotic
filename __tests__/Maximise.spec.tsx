import "react-native";
import React from "react";
import { Maximise } from "../src";

import renderer from "react-test-renderer";

describe("Maximise", () => {
  it("renders correctly", () => {
    renderer.create(<Maximise />);
  });
});
