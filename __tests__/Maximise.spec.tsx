import "react-native";
import React from "react";
import Maximise from "../src/icons/Maximise";

import renderer from "react-test-renderer";

describe("Maximise", () => {
  it("renders correctly", () => {
    renderer.create(<Maximise />);
  });
});
