import "react-native";
import React from "react";
import { Thermometer } from "../src";

import renderer from "react-test-renderer";

describe("Thermometer", () => {
  it("renders correctly", () => {
    renderer.create(<Thermometer />);
  });
});
