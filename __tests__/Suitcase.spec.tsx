import "react-native";
import React from "react";
import { Suitcase } from "../src";

import renderer from "react-test-renderer";

describe("Suitcase", () => {
  it("renders correctly", () => {
    renderer.create(<Suitcase />);
  });
});
