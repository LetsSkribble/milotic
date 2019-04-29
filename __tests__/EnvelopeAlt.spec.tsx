import "react-native";
import React from "react";
import { EnvelopeAlt } from "../src";

import renderer from "react-test-renderer";

describe("EnvelopeAlt", () => {
  it("renders correctly", () => {
    renderer.create(<EnvelopeAlt />);
  });
});
