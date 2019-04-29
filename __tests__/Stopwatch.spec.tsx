import "react-native";
import React from "react";
import Stopwatch from "../src/icons/Stopwatch";

import renderer from "react-test-renderer";

describe("Stopwatch", () => {
  it("renders correctly", () => {
    renderer.create(<Stopwatch />);
  });
});
